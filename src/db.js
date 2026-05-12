const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = process.env.DB_PATH || './data/cloaker.db';
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS campaigns (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL,
    network     TEXT    NOT NULL DEFAULT 'Other',
    slug        TEXT    NOT NULL UNIQUE,
    status      INTEGER NOT NULL DEFAULT 1,
    safe_url    TEXT    NOT NULL,
    offer_url   TEXT    NOT NULL,
    filters     TEXT    NOT NULL DEFAULT '{}',
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS requests (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    campaign_id     INTEGER REFERENCES campaigns(id) ON DELETE SET NULL,
    campaign_name   TEXT,
    ip              TEXT,
    country         TEXT,
    region          TEXT,
    city            TEXT,
    isp             TEXT,
    is_proxy        INTEGER DEFAULT 0,
    is_vpn          INTEGER DEFAULT 0,
    is_hosting      INTEGER DEFAULT 0,
    device          TEXT,
    os              TEXT,
    browser         TEXT,
    approved        INTEGER NOT NULL DEFAULT 1,
    block_reason    TEXT,
    created_at      TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_requests_campaign ON requests(campaign_id);
  CREATE INDEX IF NOT EXISTS idx_requests_created  ON requests(created_at);
  CREATE INDEX IF NOT EXISTS idx_campaigns_slug    ON campaigns(slug);
`);

// Migrations: add new columns to existing DBs without breaking deployments
const migrations = [
  'ALTER TABLE requests ADD COLUMN user_agent TEXT',
  'ALTER TABLE requests ADD COLUMN referrer TEXT',
  'ALTER TABLE requests ADD COLUMN url_params TEXT',
  'ALTER TABLE requests ADD COLUMN browser_version TEXT',
  // v2 migrations
  'ALTER TABLE requests ADD COLUMN destination TEXT',
  'ALTER TABLE requests ADD COLUMN accept_language TEXT',
  'ALTER TABLE requests ADD COLUMN sec_ch_ua TEXT',
  'ALTER TABLE requests ADD COLUMN sec_ch_ua_platform TEXT',
  'ALTER TABLE campaigns ADD COLUMN offer_url_b TEXT',
];
for (const sql of migrations) {
  try { db.exec(sql); } catch (_) { /* column already exists, skip */ }
}

module.exports = db;
