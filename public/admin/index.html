<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cloaker — Admin</title>
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>

<!-- ── Sidebar ────────────────────────────────────────────────────────────── -->
<aside class="sidebar">
  <div class="sidebar-logo">
    <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#111827"/>
      <path d="M20 6L8 11v9c0 6.627 5.149 12.84 12 14 6.851-1.16 12-7.373 12-14v-9L20 6z" fill="url(#shield-grad)" opacity="0.9"/>
      <circle cx="20" cy="20" r="5" fill="#080b12"/>
      <circle cx="20" cy="20" r="2.5" fill="url(#eye-grad)"/>
      <defs>
        <linearGradient id="shield-grad" x1="8" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
        <linearGradient id="eye-grad" x1="17.5" y1="17.5" x2="22.5" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#a78bfa"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="logo-text">
      <span class="logo-name">Cloaker</span>
      <span class="logo-sub">Traffic Control</span>
    </div>
  </div>

  <nav>
    <div class="nav-item active" data-page="campaigns" onclick="navigate('campaigns', this)">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"/></svg>
      <span class="nav-label">Campaigns</span>
    </div>
    <div class="nav-item" data-page="logs" onclick="navigate('logs', this)">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"/></svg>
      <span class="nav-label">Request Log</span>
    </div>
  </nav>
</aside>

<!-- ── Main ───────────────────────────────────────────────────────────────── -->
<main class="main">

  <!-- Date Nav -->
  <div class="stats-date-nav" id="stats-date-nav">
    <button onclick="setStatsDate('today', this)" class="active">Today</button>
    <button onclick="setStatsDate('yesterday', this)">Yesterday</button>
    <input type="date" id="stats-date-picker" oninput="setStatsDate('custom', null, this.value)">
  </div>

  <!-- Stats -->
  <div class="stats-grid" id="stats-grid">
    <div class="stat-card"><div class="stat-label">Requests</div><div class="stat-value blue" id="stat-total">—</div><div class="stat-compare" id="stat-date-label"></div></div>
    <div class="stat-card"><div class="stat-label">Approved</div><div class="stat-value green" id="stat-approved">—</div></div>
    <div class="stat-card"><div class="stat-label">Blocked</div><div class="stat-value red" id="stat-blocked">—</div></div>
    <div class="stat-card"><div class="stat-label">Approval Rate</div><div class="stat-value" id="stat-rate">—</div></div>
    <div class="stat-card"><div class="stat-label">Offer A</div><div class="stat-value blue" id="stat-offer-a">—</div></div>
    <div class="stat-card"><div class="stat-label">Offer B</div><div class="stat-value purple" id="stat-offer-b">—</div></div>
  </div>

  <!-- ── Campaigns page ─────────────────────────────────────────────────── -->
  <div class="page active" id="page-campaigns">
    <div class="section-header">
      <h2 class="section-title">Campaigns</h2>
      <button class="btn btn-primary" onclick="openCampaignModal()">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 5v14m-7-7h14"/></svg>
        New Campaign
      </button>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug / Link</th>
            <th>Network</th>
            <th>A/B</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="campaigns-tbody">
          <tr><td colspan="7"><div class="empty-state"><p>Loading…</p></div></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ── Logs page ──────────────────────────────────────────────────────── -->
  <div class="page" id="page-logs">
    <div class="section-header">
      <h2 class="section-title">Request Log</h2>
      <button class="btn btn-ghost btn-sm" onclick="loadLogs(1)">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
        Refresh
      </button>
    </div>

    <div class="filter-bar">
      <select class="form-control" id="log-filter-campaign" onchange="loadLogs(1)">
        <option value="">All Campaigns</option>
      </select>
      <input type="date" class="form-control" id="log-filter-date" oninput="loadLogs(1)" style="max-width:160px;color-scheme:dark">
      <button class="btn btn-ghost btn-sm" onclick="clearLogFilters()">Clear</button>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Date / Time</th>
            <th>Campaign</th>
            <th>IP</th>
            <th>Location</th>
            <th>Device / OS</th>
            <th>Browser</th>
            <th>ISP</th>
            <th>Dest.</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody id="logs-tbody">
          <tr><td colspan="9"><div class="empty-state"><p>Loading…</p></div></td></tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" id="logs-pagination"></div>
  </div>

</main>

<!-- ── Campaign Modal ──────────────────────────────────────────────────────── -->
<div class="modal-overlay" id="campaign-modal" onclick="closeModalOnOverlay(event)">
  <div class="modal">
    <div class="modal-header">
      <h3 class="modal-title" id="modal-title">New Campaign</h3>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>

    <form id="campaign-form" onsubmit="submitCampaign(event)">
      <input type="hidden" id="campaign-id">

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Campaign Name *</label>
          <input type="text" class="form-control" id="f-name" required placeholder="e.g. Summer Sale" oninput="autoSlug()">
        </div>
        <div class="form-group">
          <label class="form-label">Network</label>
          <select class="form-control" id="f-network">
            <option value="Facebook">Facebook</option>
            <option value="TikTok">TikTok</option>
            <option value="Google">Google</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Slug *</label>
          <input type="text" class="form-control" id="f-slug" required placeholder="e.g. summer-sale">
        </div>
        <div class="form-group">
          <label class="form-label">Status</label>
          <select class="form-control" id="f-status">
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Safe Page URL * <small style="color:var(--text-muted)">(bots / blocked visitors)</small></label>
        <input type="url" class="form-control" id="f-safe-url" required placeholder="https://example.com/safe">
      </div>

      <!-- Offer URLs + A/B -->
      <div class="form-section">
        <div class="form-section-title">Offer Pages</div>

        <div class="form-group">
          <label class="form-label">Offer URL A * <small style="color:var(--text-muted)">(main / control)</small></label>
          <input type="url" class="form-control" id="f-offer-url" required placeholder="https://example.com/offer">
        </div>

        <div class="ab-toggle-row">
          <label>Enable A/B Test</label>
          <label class="toggle">
            <input type="checkbox" id="f-ab-enabled" onchange="toggleAbFields()">
            <span class="slider"></span>
          </label>
        </div>

        <div id="ab-fields">
          <div class="form-group">
            <label class="form-label">Offer URL B <small style="color:var(--text-muted)">(variant / challenger)</small></label>
            <input type="url" class="form-control" id="f-offer-url-b" placeholder="https://example.com/offer-b">
          </div>
          <div class="form-group">
            <label class="form-label">Traffic Split — A vs B</label>
            <div class="range-wrap">
              <input type="range" id="f-ab-split" min="0" max="100" value="50" oninput="updateSplitLabel()">
              <span class="range-label" id="ab-split-label">A 50% · B 50%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Security Token -->
      <div class="form-section">
        <div class="form-section-title">Security Token</div>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">
          Exige um parâmetro secreto na URL. Visitas sem ele vão para a safe page.<br>
          O parâmetro é <strong>removido</strong> antes de redirecionar para a offer page.<br>
          Exemplo: <code style="color:var(--accent)">/slug?tk=meu-token</code>
        </p>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Nome do Parâmetro <small>(ex: tk, sid)</small></label>
            <input type="text" class="form-control" id="f-token-param" placeholder="vazio = desativado">
          </div>
          <div class="form-group">
            <label class="form-label">Valor Esperado <small>(opcional)</small></label>
            <input type="text" class="form-control" id="f-token-value" placeholder="qualquer valor aceite se vazio">
          </div>
        </div>
      </div>

      <!-- Geo Filters -->
      <div class="form-section">
        <div class="form-section-title">Geo Filters</div>
        <div class="form-group">
          <label class="form-label">Allowed Countries <small>(vazio = todos)</small></label>
          <div class="tag-input-wrap" id="allowed-countries-wrap" onclick="focusTagInput('allowed-countries-input')">
            <input type="text" class="tag-input" id="allowed-countries-input" placeholder="Código + Enter (ex: BR)" onkeydown="handleTagInput(event, 'allowed-countries')">
          </div>
          <input type="hidden" id="allowed-countries-data" value="[]">
        </div>
        <div class="form-group">
          <label class="form-label">Blocked Countries</label>
          <div class="tag-input-wrap" id="blocked-countries-wrap" onclick="focusTagInput('blocked-countries-input')">
            <input type="text" class="tag-input" id="blocked-countries-input" placeholder="Código + Enter (ex: US)" onkeydown="handleTagInput(event, 'blocked-countries')">
          </div>
          <input type="hidden" id="blocked-countries-data" value="[]">
        </div>
      </div>

      <!-- Traffic Quality -->
      <div class="form-section">
        <div class="form-section-title">Traffic Quality</div>
        <div class="checkbox-group">
          <label class="checkbox-item"><input type="checkbox" id="f-block-proxy"> Proxy</label>
          <label class="checkbox-item"><input type="checkbox" id="f-block-vpn"> VPN</label>
          <label class="checkbox-item"><input type="checkbox" id="f-block-datacenter"> Datacenter</label>
        </div>
      </div>

      <!-- Bot Protection -->
      <div class="form-section">
        <div class="form-section-title">Bot Protection</div>
        <div class="checkbox-group">
          <label class="checkbox-item"><input type="checkbox" id="f-block-empty-ua"> Empty UA</label>
          <label class="checkbox-item"><input type="checkbox" id="f-block-no-language"> No Language</label>
          <label class="checkbox-item"><input type="checkbox" id="f-block-headless"> Headless / Scripts</label>
          <label class="checkbox-item"><input type="checkbox" id="f-block-known-bots"> Known Bots</label>
          <label class="checkbox-item"><input type="checkbox" id="f-block-spy-tools"> Ad Spy Tools</label>
        </div>
      </div>

      <!-- Device & OS -->
      <div class="form-section">
        <div class="form-section-title">Device &amp; OS Filters</div>

        <div class="form-group">
          <label class="form-label">Blocked OS</label>
          <div class="checkbox-group">
            <label class="checkbox-item"><input type="checkbox" class="blocked-os" value="Windows"> Windows</label>
            <label class="checkbox-item"><input type="checkbox" class="blocked-os" value="macOS"> macOS</label>
            <label class="checkbox-item"><input type="checkbox" class="blocked-os" value="Android"> Android</label>
            <label class="checkbox-item"><input type="checkbox" class="blocked-os" value="iOS"> iOS</label>
            <label class="checkbox-item"><input type="checkbox" class="blocked-os" value="Linux"> Linux</label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Blocked Devices</label>
          <div class="checkbox-group">
            <label class="checkbox-item"><input type="checkbox" class="blocked-devices" value="mobile"> Mobile</label>
            <label class="checkbox-item"><input type="checkbox" class="blocked-devices" value="desktop"> Desktop</label>
            <label class="checkbox-item"><input type="checkbox" class="blocked-devices" value="tablet"> Tablet</label>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary" id="submit-btn">Create Campaign</button>
      </div>
    </form>
  </div>
</div>

<!-- ── Request Detail Drawer ────────────────────────────────────────────────── -->
<div class="drawer-overlay" id="drawer-overlay" onclick="closeDrawerOnOverlay(event)">
  <div class="drawer" id="request-drawer">
    <div class="drawer-header">
      <div class="drawer-meta">
        <div class="drawer-title" id="drawer-title">Request Detail</div>
        <div class="drawer-subtitle" id="drawer-subtitle"></div>
      </div>
      <button class="modal-close" onclick="closeDrawer()">&times;</button>
    </div>
    <div id="drawer-content"></div>
  </div>
</div>

<!-- ── Toast container ─────────────────────────────────────────────────────── -->
<div class="toast-container" id="toast-container"></div>

<script>
// ── State ─────────────────────────────────────────────────────────────────────
let currentPage = 'campaigns';
let logsPage    = 1;
let editingId   = null;
let logRows     = [];
let statsDate   = new Date().toISOString().slice(0, 10);

// ── Navigation ────────────────────────────────────────────────────────────────
function navigate(page, el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  currentPage = page;
  if (page === 'campaigns') loadCampaigns();
  if (page === 'logs') { populateLogFilter(); loadLogs(1); }
}

// ── API helper ────────────────────────────────────────────────────────────────
async function api(method, path, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body !== undefined) opts.body = JSON.stringify(body);
  const res  = await fetch('/api' + path, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'API error');
  return data;
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function toast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = (type === 'success' ? '✓' : '✕') + ' ' + msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ── Stats ─────────────────────────────────────────────────────────────────────
async function loadStats(date) {
  try {
    const d = date || statsDate;
    const s = await api('GET', '/stats?date=' + d);
    document.getElementById('stat-total').textContent    = s.total;
    document.getElementById('stat-approved').textContent = s.approved;
    document.getElementById('stat-blocked').textContent  = s.blocked;
    document.getElementById('stat-rate').textContent     = s.approval_rate + '%';
    document.getElementById('stat-offer-a').textContent  = s.offer_a;
    document.getElementById('stat-offer-b').textContent  = s.offer_b;

    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    let label = d;
    if (d === today) label = 'Today';
    else if (d === yesterday) label = 'Yesterday';
    document.getElementById('stat-date-label').textContent = label;
  } catch (e) { console.warn('stats error', e); }
}

function setStatsDate(preset, btn, customDate) {
  document.querySelectorAll('.stats-date-nav button').forEach(b => b.classList.remove('active'));

  if (preset === 'today') {
    statsDate = new Date().toISOString().slice(0, 10);
    document.getElementById('stats-date-picker').value = '';
    if (btn) btn.classList.add('active');
  } else if (preset === 'yesterday') {
    statsDate = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    document.getElementById('stats-date-picker').value = '';
    if (btn) btn.classList.add('active');
  } else if (preset === 'custom' && customDate) {
    statsDate = customDate;
  }

  loadStats(statsDate);
}

// ── Campaigns ─────────────────────────────────────────────────────────────────
async function loadCampaigns() {
  const tbody = document.getElementById('campaigns-tbody');
  tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><p>Loading…</p></div></td></tr>';
  try {
    const campaigns = await api('GET', '/campaigns');
    if (!campaigns.length) {
      tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><p>No campaigns yet. Create your first one!</p></div></td></tr>';
      return;
    }
    tbody.innerHTML = campaigns.map(c => {
      const abEnabled = c.filters && c.filters.ab_enabled && c.offer_url_b;
      const abBadge   = abEnabled
        ? `<span class="badge badge-purple">A/B ${c.filters.ab_split ?? 50}% · ${100 - (c.filters.ab_split ?? 50)}%</span>`
        : `<span class="badge badge-gray">—</span>`;
      return `
      <tr>
        <td><strong style="color:var(--text)">${esc(c.name)}</strong></td>
        <td>
          <code style="font-size:12px;color:var(--accent)">/${esc(c.slug)}</code>
          <button onclick="copySlug('${esc(c.slug)}')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);margin-left:4px;font-size:11px" title="Copy link">📋</button>
        </td>
        <td><span class="badge ${networkBadge(c.network)}">${esc(c.network)}</span></td>
        <td>${abBadge}</td>
        <td>
          <label class="toggle">
            <input type="checkbox" ${c.status ? 'checked' : ''} onchange="toggleStatus(${c.id}, this.checked)">
            <span class="slider"></span>
          </label>
        </td>
        <td style="color:var(--text-muted)">${formatDate(c.created_at)}</td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="editCampaign(${c.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteCampaign(${c.id}, '${esc(c.name)}')">Delete</button>
        </td>
      </tr>`;
    }).join('');
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><p>Error: ${esc(e.message)}</p></div></td></tr>`;
  }
}

function networkBadge(n) {
  if (n === 'Facebook') return 'badge-blue';
  if (n === 'TikTok')   return 'badge-red';
  if (n === 'Google')   return 'badge-yellow';
  return 'badge-gray';
}

async function toggleStatus(id, checked) {
  try {
    await api('PUT', '/campaigns/' + id, { status: checked ? 1 : 0 });
    toast(checked ? 'Campaign activated' : 'Campaign deactivated');
  } catch (e) { toast(e.message, 'error'); loadCampaigns(); }
}

async function deleteCampaign(id, name) {
  if (!confirm(`Delete campaign "${name}"? This cannot be undone.`)) return;
  try {
    await api('DELETE', '/campaigns/' + id);
    toast('Campaign deleted');
    loadCampaigns();
  } catch (e) { toast(e.message, 'error'); }
}

async function editCampaign(id) {
  try {
    const c = await api('GET', '/campaigns/' + id);
    editingId = id;
    document.getElementById('modal-title').textContent = 'Edit Campaign';
    document.getElementById('submit-btn').textContent  = 'Save Changes';
    document.getElementById('campaign-id').value       = id;
    document.getElementById('f-name').value            = c.name;
    document.getElementById('f-network').value         = c.network;
    document.getElementById('f-slug').value            = c.slug;
    document.getElementById('f-status').value          = c.status ? '1' : '0';
    document.getElementById('f-safe-url').value        = c.safe_url;
    document.getElementById('f-offer-url').value       = c.offer_url;
    document.getElementById('f-offer-url-b').value     = c.offer_url_b || '';

    const f = c.filters || {};
    document.getElementById('f-token-param').value          = f.token_param || '';
    document.getElementById('f-token-value').value          = f.token_value || '';
    document.getElementById('f-block-proxy').checked        = !!f.block_proxy;
    document.getElementById('f-block-vpn').checked          = !!f.block_vpn;
    document.getElementById('f-block-datacenter').checked   = !!f.block_datacenter;
    document.getElementById('f-block-empty-ua').checked     = !!f.block_empty_ua;
    document.getElementById('f-block-no-language').checked  = !!f.block_no_language;
    document.getElementById('f-block-headless').checked     = !!f.block_headless;
    document.getElementById('f-block-known-bots').checked   = !!f.block_known_bots;
    document.getElementById('f-block-spy-tools').checked    = !!f.block_spy_tools;

    // A/B
    const abEnabled = !!f.ab_enabled;
    document.getElementById('f-ab-enabled').checked = abEnabled;
    document.getElementById('f-ab-split').value     = f.ab_split !== undefined ? f.ab_split : 50;
    updateSplitLabel();
    document.getElementById('ab-fields').classList.toggle('visible', abEnabled);

    setTags('allowed-countries', f.allowed_countries || []);
    setTags('blocked-countries', f.blocked_countries || []);

    document.querySelectorAll('.blocked-os').forEach(cb => {
      cb.checked = (f.blocked_os || []).includes(cb.value);
    });
    document.querySelectorAll('.blocked-devices').forEach(cb => {
      cb.checked = (f.blocked_devices || []).includes(cb.value);
    });

    openModal();
  } catch (e) { toast(e.message, 'error'); }
}

// ── A/B helpers ───────────────────────────────────────────────────────────────
function toggleAbFields() {
  const enabled = document.getElementById('f-ab-enabled').checked;
  document.getElementById('ab-fields').classList.toggle('visible', enabled);
}

function updateSplitLabel() {
  const a = parseInt(document.getElementById('f-ab-split').value);
  document.getElementById('ab-split-label').textContent = `A ${a}% · B ${100 - a}%`;
}

// ── Campaign form ─────────────────────────────────────────────────────────────
function openCampaignModal() {
  editingId = null;
  document.getElementById('modal-title').textContent = 'New Campaign';
  document.getElementById('submit-btn').textContent  = 'Create Campaign';
  document.getElementById('campaign-form').reset();
  document.getElementById('campaign-id').value   = '';
  document.getElementById('f-token-param').value = '';
  document.getElementById('f-token-value').value = '';
  document.getElementById('ab-fields').classList.remove('visible');
  document.getElementById('f-ab-split').value = 50;
  updateSplitLabel();
  setTags('allowed-countries', []);
  setTags('blocked-countries', []);
  openModal();
}

function openModal()  { document.getElementById('campaign-modal').classList.add('open'); }
function closeModal() { document.getElementById('campaign-modal').classList.remove('open'); }
function closeModalOnOverlay(e) { if (e.target.id === 'campaign-modal') closeModal(); }

function autoSlug() {
  if (editingId) return;
  document.getElementById('f-slug').value = slugify(document.getElementById('f-name').value);
}

function slugify(str) {
  return str.toLowerCase().trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function submitCampaign(e) {
  e.preventDefault();

  const allowedCountries = JSON.parse(document.getElementById('allowed-countries-data').value || '[]');
  const blockedCountries = JSON.parse(document.getElementById('blocked-countries-data').value || '[]');
  const blockedOs      = [...document.querySelectorAll('.blocked-os:checked')].map(cb => cb.value);
  const blockedDevices = [...document.querySelectorAll('.blocked-devices:checked')].map(cb => cb.value);
  const abEnabled      = document.getElementById('f-ab-enabled').checked;
  const abSplit        = parseInt(document.getElementById('f-ab-split').value);

  const payload = {
    name:        document.getElementById('f-name').value,
    network:     document.getElementById('f-network').value,
    slug:        document.getElementById('f-slug').value,
    status:      parseInt(document.getElementById('f-status').value),
    safe_url:    document.getElementById('f-safe-url').value,
    offer_url:   document.getElementById('f-offer-url').value,
    offer_url_b: document.getElementById('f-offer-url-b').value.trim() || null,
    filters: {
      token_param:       document.getElementById('f-token-param').value.trim(),
      token_value:       document.getElementById('f-token-value').value.trim(),
      allowed_countries: allowedCountries,
      blocked_countries: blockedCountries,
      block_proxy:       document.getElementById('f-block-proxy').checked,
      block_vpn:         document.getElementById('f-block-vpn').checked,
      block_datacenter:  document.getElementById('f-block-datacenter').checked,
      block_empty_ua:    document.getElementById('f-block-empty-ua').checked,
      block_no_language: document.getElementById('f-block-no-language').checked,
      block_headless:    document.getElementById('f-block-headless').checked,
      block_known_bots:  document.getElementById('f-block-known-bots').checked,
      block_spy_tools:   document.getElementById('f-block-spy-tools').checked,
      blocked_os:        blockedOs,
      blocked_devices:   blockedDevices,
      ab_enabled:        abEnabled,
      ab_split:          abSplit,
    }
  };

  try {
    if (editingId) {
      await api('PUT', '/campaigns/' + editingId, payload);
      toast('Campaign updated!');
    } else {
      await api('POST', '/campaigns', payload);
      toast('Campaign created!');
    }
    closeModal();
    loadCampaigns();
  } catch (err) {
    toast(err.message, 'error');
  }
}

// ── Logs ──────────────────────────────────────────────────────────────────────
async function populateLogFilter() {
  try {
    const campaigns = await api('GET', '/campaigns');
    const sel = document.getElementById('log-filter-campaign');
    sel.innerHTML = '<option value="">All Campaigns</option>' +
      campaigns.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join('');
  } catch (_) {}
}

function clearLogFilters() {
  document.getElementById('log-filter-campaign').value = '';
  document.getElementById('log-filter-date').value = '';
  loadLogs(1);
}

async function loadLogs(page) {
  if (page) logsPage = page;
  const tbody = document.getElementById('logs-tbody');
  tbody.innerHTML = '<tr><td colspan="9"><div class="empty-state"><p>Loading…</p></div></td></tr>';

  const campaignId = document.getElementById('log-filter-campaign').value;
  const date       = document.getElementById('log-filter-date').value;
  let url = `/requests?page=${logsPage}&limit=20`;
  if (campaignId) url += `&campaign_id=${campaignId}`;
  if (date)       url += `&date=${date}`;

  try {
    const result = await api('GET', url);
    logRows = result.data;

    if (!logRows.length) {
      tbody.innerHTML = '<tr><td colspan="9"><div class="empty-state"><p>No requests found.</p></div></td></tr>';
      document.getElementById('logs-pagination').innerHTML = '';
      return;
    }

    tbody.innerHTML = logRows.map((r, i) => `
      <tr class="clickable" onclick="openDrawer(${i})">
        <td style="white-space:nowrap;color:var(--text-muted)">${formatDate(r.created_at)}</td>
        <td style="color:var(--text)">${esc(r.campaign_name || '—')}</td>
        <td style="font-family:monospace;font-size:12px;color:var(--text-muted)">${esc(r.ip || '—')}</td>
        <td>${countryFlag(r.country)} ${esc(r.city || '')} ${esc(r.country || '')}</td>
        <td>${deviceIcon(r.device)} ${esc(r.device || '—')} · ${esc(r.os || '—')}</td>
        <td>${esc(r.browser || '—')}${r.browser_version ? `<small style="color:var(--text-muted)"> ${esc(r.browser_version)}</small>` : ''}</td>
        <td style="color:var(--text-muted);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(r.isp || '')}">${esc(r.isp || '—')}</td>
        <td>${destBadge(r.destination)}</td>
        <td><span class="badge ${r.approved ? 'badge-green' : 'badge-red'}">${r.approved ? 'Approved' : 'Blocked'}</span></td>
      </tr>
    `).join('');

    renderPagination(result.pagination);
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state"><p>Error: ${esc(e.message)}</p></div></td></tr>`;
  }
}

function destBadge(dest) {
  if (dest === 'offer_a') return '<span class="badge badge-a">Offer A</span>';
  if (dest === 'offer_b') return '<span class="badge badge-b">Offer B</span>';
  if (dest === 'safe')    return '<span class="badge badge-safe">Safe</span>';
  return '<span style="color:var(--text-muted)">—</span>';
}

// ── Detail Drawer ─────────────────────────────────────────────────────────────
function openDrawer(idx) {
  const r = logRows[idx];
  if (!r) return;

  let params = null;
  try { if (r.url_params) params = JSON.parse(r.url_params); } catch (_) {}

  let source = 'Direct';
  if (params && params.utm_source) source = esc(params.utm_source);
  else if (r.referrer) source = 'Referral';

  const flags = [];
  if (r.is_proxy)   flags.push('<span class="badge badge-yellow">Proxy</span>');
  if (r.is_vpn)     flags.push('<span class="badge badge-yellow">VPN</span>');
  if (r.is_hosting) flags.push('<span class="badge badge-gray">Datacenter</span>');

  const paramsText = params
    ? Object.entries(params).map(([k, v]) => `${k} = ${v}`).join('\n')
    : null;

  const resultBadge = r.approved
    ? `<span class="badge badge-green" style="font-size:13px;padding:4px 12px">✓ Approved → ${destBadge(r.destination)}</span>`
    : `<span class="badge badge-red" style="font-size:13px;padding:4px 12px">✕ Blocked → ${destBadge(r.destination)}</span>`;

  document.getElementById('drawer-title').innerHTML  = resultBadge;
  document.getElementById('drawer-subtitle').textContent = formatDate(r.created_at);

  document.getElementById('drawer-content').innerHTML = `
    <div class="detail-section">
      <div class="detail-section-title">Campaign</div>
      <div class="detail-row"><span class="detail-label">Name</span><span class="detail-value">${esc(r.campaign_name || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">Destination</span><span class="detail-value">${destBadge(r.destination)}</span></div>
      <div class="detail-row"><span class="detail-label">Source</span><span class="detail-value">${source}</span></div>
      ${r.block_reason ? `<div class="detail-row"><span class="detail-label">Block Reason</span><span class="detail-value" style="color:var(--danger)">${esc(r.block_reason)}</span></div>` : ''}
    </div>

    <div class="detail-section">
      <div class="detail-section-title">Location</div>
      <div class="detail-row"><span class="detail-label">Country</span><span class="detail-value">${countryFlag(r.country)} ${esc(r.country || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">Region</span><span class="detail-value">${esc(r.region || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">City</span><span class="detail-value">${esc(r.city || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">IP</span><span class="detail-value" style="font-family:monospace;font-size:12px">${esc(r.ip || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">ISP</span><span class="detail-value">${esc(r.isp || '—')}</span></div>
      ${flags.length ? `<div class="detail-row"><span class="detail-label">Flags</span><span class="detail-value">${flags.join(' ')}</span></div>` : ''}
    </div>

    <div class="detail-section">
      <div class="detail-section-title">Device</div>
      <div class="detail-row"><span class="detail-label">Type</span><span class="detail-value">${deviceIcon(r.device)} ${esc(r.device || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">OS</span><span class="detail-value">${esc(r.os || '—')}</span></div>
      <div class="detail-row"><span class="detail-label">Browser</span><span class="detail-value">${esc(r.browser || '—')}${r.browser_version ? ' <span style="color:var(--text-muted)">' + esc(r.browser_version) + '</span>' : ''}</span></div>
      ${r.sec_ch_ua_platform ? `<div class="detail-row"><span class="detail-label">Platform (CH)</span><span class="detail-value">${esc(r.sec_ch_ua_platform)}</span></div>` : ''}
      ${r.sec_ch_ua ? `<div class="detail-row"><span class="detail-label">Browser (CH)</span><span class="detail-value" style="font-size:11px">${esc(r.sec_ch_ua)}</span></div>` : ''}
    </div>

    <div class="detail-section">
      <div class="detail-section-title">Request</div>
      <div class="detail-row"><span class="detail-label">Referrer</span><span class="detail-value" style="font-size:12px">${r.referrer ? esc(r.referrer) : '—'}</span></div>
      <div class="detail-row"><span class="detail-label">Language</span><span class="detail-value">${r.accept_language ? esc(r.accept_language) : '—'}</span></div>
      ${paramsText
        ? `<div style="margin-top:8px"><div class="detail-label" style="margin-bottom:4px">URL Parameters</div><div class="detail-code">${esc(paramsText)}</div></div>`
        : `<div class="detail-row"><span class="detail-label">URL Params</span><span class="detail-value">—</span></div>`}
    </div>

    ${r.user_agent ? `<div class="detail-section">
      <div class="detail-section-title">User Agent</div>
      <div class="detail-code">${esc(r.user_agent)}</div>
    </div>` : ''}
  `;

  document.getElementById('drawer-overlay').classList.add('open');
}

function closeDrawer() { document.getElementById('drawer-overlay').classList.remove('open'); }
function closeDrawerOnOverlay(e) { if (e.target.id === 'drawer-overlay') closeDrawer(); }

// ── Pagination ────────────────────────────────────────────────────────────────
function renderPagination(p) {
  const el = document.getElementById('logs-pagination');
  if (p.pages <= 1) { el.innerHTML = ''; return; }

  let html = `<button class="page-btn" onclick="loadLogs(${p.page - 1})" ${p.page <= 1 ? 'disabled' : ''}>&laquo;</button>`;
  for (let i = Math.max(1, p.page - 2); i <= Math.min(p.pages, p.page + 2); i++) {
    html += `<button class="page-btn ${i === p.page ? 'active' : ''}" onclick="loadLogs(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="loadLogs(${p.page + 1})" ${p.page >= p.pages ? 'disabled' : ''}>&raquo;</button>`;
  html += `<span class="page-info">${p.total} total</span>`;
  el.innerHTML = html;
}

// ── Tag inputs ────────────────────────────────────────────────────────────────
function handleTagInput(e, id) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    const val = e.target.value.trim().toUpperCase().replace(/[^A-Z]/g, '');
    if (val.length === 2) addTag(id, val);
    e.target.value = '';
  } else if (e.key === 'Backspace' && !e.target.value) {
    removeLastTag(id);
  }
}

function focusTagInput(id) { document.getElementById(id).focus(); }
function getTags(id)       { return JSON.parse(document.getElementById(id + '-data').value || '[]'); }

function setTags(id, tags) {
  document.getElementById(id + '-data').value = JSON.stringify(tags);
  renderTags(id, tags);
}

function addTag(id, val) {
  const tags = getTags(id);
  if (tags.includes(val)) return;
  tags.push(val);
  setTags(id, tags);
}

function removeTag(id, val) { setTags(id, getTags(id).filter(t => t !== val)); }

function removeLastTag(id) {
  const tags = getTags(id);
  if (!tags.length) return;
  tags.pop();
  setTags(id, tags);
}

function renderTags(id, tags) {
  const wrap  = document.getElementById(id + '-wrap');
  const input = document.getElementById(id + '-input');
  const tagEls = tags.map(t =>
    `<span class="tag">${t} <span class="tag-remove" onclick="removeTag('${id}','${t}')">&times;</span></span>`
  ).join('');
  wrap.innerHTML = tagEls;
  wrap.appendChild(input);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function formatDate(dt) {
  if (!dt) return '—';
  try {
    return new Date(dt + 'Z').toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });
  } catch { return dt; }
}

function countryFlag(code) {
  if (!code || code === 'XX') return '🌐';
  try {
    return String.fromCodePoint(...[...code.toUpperCase()].map(c => 0x1F1E6 - 65 + c.charCodeAt(0)));
  } catch { return '🌐'; }
}

function deviceIcon(d) {
  if (d === 'mobile') return '📱';
  if (d === 'tablet') return '⬜';
  return '💻';
}

function copySlug(slug) {
  const url = window.location.origin + '/' + slug;
  navigator.clipboard.writeText(url).then(() => toast('Link copied!'));
}

// ── Init ──────────────────────────────────────────────────────────────────────
loadStats();
loadCampaigns();
setInterval(() => loadStats(statsDate), 30000);
</script>
</body>
</html>
