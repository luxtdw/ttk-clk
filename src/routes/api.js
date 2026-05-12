const express = require('express');
const db = require('../db');

const router = express.Router();

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ── Auto-cleanup: delete requests older than 7 days ───────────────────────────

function runCleanup() {
  try {
    const info = db.prepare(
      `DELETE FROM requests WHERE created_at < datetime('now', '-7 days')`
    ).run();
    if (info.changes > 0) {
      console.log(`[cleanup] deleted ${info.changes} requests older than 7 days`);
    }
  } catch (err) {
    console.error('[cleanup] error:', err.message);
  }
}

// Run on startup and every 24 hours
runCleanup();
setInterval(runCleanup, 24 * 60 * 60 * 1000);

// ── Stats ─────────────────────────────────────────────────────────────────────

router.get('/stats', (req, res) => {
  // Accepts ?date=YYYY-MM-DD, defaults to today
  const date = req.query.date || new Date().toISOString().slice(0, 10);
  const from = date + ' 00:00:00';
  const to   = date + ' 23:59:59';

  const row = db.prepare(`
    SELECT
      COUNT(*)                                                       AS total,
      SUM(CASE WHEN approved=1 THEN 1 ELSE 0 END)                   AS approved,
      SUM(CASE WHEN approved=0 THEN 1 ELSE 0 END)                   AS blocked,
      SUM(CASE WHEN destination='offer_a' THEN 1 ELSE 0 END)        AS offer_a,
      SUM(CASE WHEN destination='offer_b' THEN 1 ELSE 0 END)        AS offer_b
    FROM requests
    WHERE created_at BETWEEN ? AND ?
  `).get(from, to);

  const total    = row.total    || 0;
  const approved = row.approved || 0;
  const blocked  = row.blocked  || 0;
  const offer_a  = row.offer_a  || 0;
  const offer_b  = row.offer_b  || 0;
  const rate     = total > 0 ? ((approved / total) * 100).toFixed(1) : '0.0';

  res.json({ total, approved, blocked, offer_a, offer_b, approval_rate: rate, date });
});

// ── Campaigns ─────────────────────────────────────────────────────────────────

router.get('/campaigns', (_req, res) => {
  const campaigns = db.prepare('SELECT * FROM campaigns ORDER BY created_at DESC').all();
  const parsed = campaigns.map(c => ({ ...c, filters: JSON.parse(c.filters || '{}') }));
  res.json(parsed);
});

router.get('/campaigns/:id', (req, res) => {
  const campaign = db.prepare('SELECT * FROM campaigns WHERE id = ?').get(req.params.id);
  if (!campaign) return res.status(404).json({ error: 'Campaign not found' });
  res.json({ ...campaign, filters: JSON.parse(campaign.filters || '{}') });
});

router.post('/campaigns', (req, res) => {
  const { name, network, slug: rawSlug, status, safe_url, offer_url, offer_url_b, filters } = req.body;

  if (!name || !safe_url || !offer_url) {
    return res.status(400).json({ error: 'name, safe_url and offer_url are required' });
  }

  const slug = rawSlug ? slugify(rawSlug) : slugify(name);
  if (!slug) return res.status(400).json({ error: 'Invalid slug' });

  const existing = db.prepare('SELECT id FROM campaigns WHERE slug = ?').get(slug);
  if (existing) return res.status(400).json({ error: `Slug "${slug}" is already in use` });

  const filtersJson = JSON.stringify(filters || {});

  try {
    const info = db.prepare(`
      INSERT INTO campaigns (name, network, slug, status, safe_url, offer_url, offer_url_b, filters)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      name,
      network || 'Other',
      slug,
      status !== undefined ? (status ? 1 : 0) : 1,
      safe_url,
      offer_url,
      offer_url_b || null,
      filtersJson
    );

    const campaign = db.prepare('SELECT * FROM campaigns WHERE id = ?').get(info.lastInsertRowid);
    res.status(201).json({ ...campaign, filters: JSON.parse(campaign.filters) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/campaigns/:id', (req, res) => {
  const campaign = db.prepare('SELECT * FROM campaigns WHERE id = ?').get(req.params.id);
  if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

  const { name, network, slug: rawSlug, status, safe_url, offer_url, offer_url_b, filters } = req.body;

  const slug = rawSlug ? slugify(rawSlug) : campaign.slug;

  if (slug !== campaign.slug) {
    const existing = db.prepare('SELECT id FROM campaigns WHERE slug = ? AND id != ?').get(slug, campaign.id);
    if (existing) return res.status(400).json({ error: `Slug "${slug}" is already in use` });
  }

  const filtersJson = JSON.stringify(filters !== undefined ? filters : JSON.parse(campaign.filters));

  try {
    db.prepare(`
      UPDATE campaigns
      SET name=?, network=?, slug=?, status=?, safe_url=?, offer_url=?, offer_url_b=?, filters=?
      WHERE id=?
    `).run(
      name       || campaign.name,
      network    || campaign.network,
      slug,
      status !== undefined ? (status ? 1 : 0) : campaign.status,
      safe_url   || campaign.safe_url,
      offer_url  || campaign.offer_url,
      offer_url_b !== undefined ? (offer_url_b || null) : campaign.offer_url_b,
      filtersJson,
      campaign.id
    );

    const updated = db.prepare('SELECT * FROM campaigns WHERE id = ?').get(campaign.id);
    res.json({ ...updated, filters: JSON.parse(updated.filters) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/campaigns/:id', (req, res) => {
  const campaign = db.prepare('SELECT id FROM campaigns WHERE id = ?').get(req.params.id);
  if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

  db.prepare('DELETE FROM campaigns WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// ── Requests ──────────────────────────────────────────────────────────────────

router.get('/requests', (req, res) => {
  const page       = Math.max(1, parseInt(req.query.page)  || 1);
  const limit      = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
  const offset     = (page - 1) * limit;
  const campaignId = req.query.campaign_id;
  const date       = req.query.date; // YYYY-MM-DD

  const conditions = [];
  const params     = [];

  if (campaignId) {
    conditions.push('campaign_id = ?');
    params.push(campaignId);
  }
  if (date) {
    conditions.push(`created_at BETWEEN ? AND ?`);
    params.push(date + ' 00:00:00', date + ' 23:59:59');
  }

  const where = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

  const total = db.prepare(`SELECT COUNT(*) AS cnt FROM requests ${where}`).get(...params).cnt;
  const rows  = db.prepare(
    `SELECT * FROM requests ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`
  ).all(...params, limit, offset);

  res.json({
    data: rows,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) }
  });
});

module.exports = router;
