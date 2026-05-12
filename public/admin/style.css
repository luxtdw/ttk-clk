@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ── Reset & Base ──────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:           #080b12;
  --bg-2:         #0d1117;
  --bg-3:         #111827;
  --bg-4:         #1a2235;
  --border:       #1e2d40;
  --border-light: #253347;
  --accent:       #3b82f6;
  --accent-glow:  rgba(59, 130, 246, 0.15);
  --accent-hover: #2563eb;
  --success:      #10b981;
  --success-bg:   rgba(16, 185, 129, 0.12);
  --danger:       #ef4444;
  --danger-bg:    rgba(239, 68, 68, 0.12);
  --warning:      #f59e0b;
  --warning-bg:   rgba(245, 158, 11, 0.12);
  --purple:       #8b5cf6;
  --purple-bg:    rgba(139, 92, 246, 0.12);
  --text:         #e2e8f0;
  --text-muted:   #64748b;
  --text-dim:     #94a3b8;
  --sidebar-w:    220px;
  --radius:       10px;
  --radius-sm:    6px;
  --shadow:       0 4px 24px rgba(0,0,0,0.4);
  --shadow-sm:    0 2px 8px rgba(0,0,0,0.3);
}

html, body {
  height: 100%;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* ── Layout ────────────────────────────────────────────────────────────────── */
body { display: flex; min-height: 100vh; }

.sidebar {
  width: var(--sidebar-w);
  min-height: 100vh;
  background: var(--bg-2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 100;
}

.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  padding: 28px 32px;
  min-height: 100vh;
  background: var(--bg);
}

/* ── Sidebar Logo ──────────────────────────────────────────────────────────── */
.sidebar-logo {
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar-logo .logo-icon {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
}

.sidebar-logo .logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.sidebar-logo .logo-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.3px;
}

.sidebar-logo .logo-sub {
  font-size: 10px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

/* ── Sidebar Nav ───────────────────────────────────────────────────────────── */
nav { padding: 12px 10px; flex: 1; }

.nav-item {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 13px;
  transition: all 0.15s;
  margin-bottom: 2px;
  user-select: none;
  border: 1px solid transparent;
}

.nav-item:hover {
  background: var(--bg-3);
  color: var(--text-dim);
}

.nav-item.active {
  background: var(--accent-glow);
  color: var(--accent);
  border-color: rgba(59, 130, 246, 0.2);
}

.nav-item svg { flex-shrink: 0; }

/* ── Stats Grid ────────────────────────────────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  gap: 14px;
  margin-bottom: 10px;
}

.stat-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 20px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.15s;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  border-radius: var(--radius) var(--radius) 0 0;
}

.stat-card:nth-child(1)::before { background: var(--accent); }
.stat-card:nth-child(2)::before { background: var(--success); }
.stat-card:nth-child(3)::before { background: var(--danger); }
.stat-card:nth-child(4)::before { background: var(--purple); }
.stat-card:nth-child(5)::before { background: var(--warning); }
.stat-card:nth-child(6)::before { background: var(--accent); }

.stat-card:hover { border-color: var(--border-light); transform: translateY(-1px); }

.stat-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.stat-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.5px;
  line-height: 1;
}

.stat-value.blue   { color: var(--accent); }
.stat-value.green  { color: var(--success); }
.stat-value.red    { color: var(--danger); }
.stat-value.purple { color: var(--purple); }
.stat-value.yellow { color: var(--warning); }

.stat-compare {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 6px;
}

/* ── Stats date nav ────────────────────────────────────────────────────────── */
.stats-date-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.stats-date-nav button {
  background: var(--bg-2);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
}
.stats-date-nav button:hover { background: var(--bg-3); color: var(--text); }
.stats-date-nav button.active { background: var(--accent-glow); border-color: rgba(59,130,246,0.3); color: var(--accent); }

.stats-date-nav input[type=date] {
  background: var(--bg-2);
  border: 1px solid var(--border);
  color: var(--text-dim);
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  color-scheme: dark;
}
.stats-date-nav input[type=date]:focus { border-color: var(--accent); }

/* ── Pages ─────────────────────────────────────────────────────────────────── */
.page { display: none; }
.page.active { display: block; }

/* ── Section header ────────────────────────────────────────────────────────── */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.3px;
}

/* ── Filter bar ────────────────────────────────────────────────────────────── */
.filter-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-bar .form-control { max-width: 200px; }

/* ── Table ─────────────────────────────────────────────────────────────────── */
.table-wrap {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

table { width: 100%; border-collapse: collapse; }

thead tr {
  background: var(--bg-3);
  border-bottom: 1px solid var(--border);
}

th {
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--text-muted);
  white-space: nowrap;
}

td {
  padding: 11px 14px;
  border-bottom: 1px solid var(--border);
  color: var(--text-dim);
  vertical-align: middle;
}

tbody tr:last-child td { border-bottom: none; }

tbody tr.clickable {
  cursor: pointer;
  transition: background 0.12s;
}

tbody tr.clickable:hover { background: rgba(59, 130, 246, 0.04); }

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-muted);
}

/* ── Buttons ───────────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.15s;
  white-space: nowrap;
  font-family: inherit;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(59,130,246,0.4);
}

.btn-ghost {
  background: var(--bg-3);
  color: var(--text-dim);
  border: 1px solid var(--border);
}
.btn-ghost:hover { background: var(--bg-4); color: var(--text); border-color: var(--border-light); }

.btn-danger {
  background: var(--danger-bg);
  color: var(--danger);
  border: 1px solid rgba(239,68,68,0.2);
}
.btn-danger:hover { background: rgba(239,68,68,0.2); }

.btn-sm { padding: 4px 10px; font-size: 11px; }

/* ── Badges ────────────────────────────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.badge-green  { background: var(--success-bg);  color: var(--success); }
.badge-red    { background: var(--danger-bg);   color: var(--danger);  }
.badge-blue   { background: var(--accent-glow); color: var(--accent);  }
.badge-yellow { background: var(--warning-bg);  color: var(--warning); }
.badge-purple { background: var(--purple-bg);   color: var(--purple);  }
.badge-gray   { background: rgba(100,116,139,0.15); color: var(--text-muted); }
.badge-a      { background: rgba(59,130,246,0.15);  color: #60a5fa; }
.badge-b      { background: rgba(139,92,246,0.15);  color: #a78bfa; }
.badge-safe   { background: rgba(100,116,139,0.12); color: var(--text-muted); }

/* ── Toggle ────────────────────────────────────────────────────────────────── */
.toggle { position: relative; display: inline-block; width: 36px; height: 20px; }
.toggle input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute; inset: 0;
  background: var(--border-light);
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
}
.slider::before {
  content: '';
  position: absolute;
  width: 14px; height: 14px;
  left: 3px; top: 3px;
  background: var(--text-muted);
  border-radius: 50%;
  transition: 0.2s;
}
.toggle input:checked + .slider { background: rgba(16,185,129,0.3); }
.toggle input:checked + .slider::before { transform: translateX(16px); background: var(--success); }

/* ── Pagination ────────────────────────────────────────────────────────────── */
.pagination {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 14px 16px;
  border-top: 1px solid var(--border);
}

.page-btn {
  min-width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--bg-3);
  color: var(--text-dim);
  transition: all 0.15s;
  font-family: inherit;
}
.page-btn:hover:not(:disabled) { background: var(--bg-4); color: var(--text); border-color: var(--border-light); }
.page-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }
.page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.page-info { margin-left: 8px; font-size: 11px; color: var(--text-muted); }

/* ── Modal ─────────────────────────────────────────────────────────────────── */
.modal-overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  z-index: 200;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-overlay.open { display: flex; }

.modal {
  background: var(--bg-2);
  border: 1px solid var(--border-light);
  border-radius: 14px;
  width: 100%;
  max-width: 640px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg-2);
  z-index: 1;
}

.modal-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.modal-close {
  background: var(--bg-3);
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 28px; height: 28px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  font-family: inherit;
}
.modal-close:hover { background: var(--bg-4); color: var(--text); }

/* ── Form ──────────────────────────────────────────────────────────────────── */
form { padding: 20px 24px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.form-group { margin-bottom: 14px; }

.form-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.form-control {
  width: 100%;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text);
  padding: 8px 11px;
  font-size: 13px;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
  -webkit-appearance: none;
}
.form-control:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
.form-control::placeholder { color: var(--text-muted); }
select.form-control { cursor: pointer; }
select.form-control option { background: var(--bg-3); }

.form-section {
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 16px;
  margin-bottom: 14px;
}

.form-section-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: var(--accent);
  margin-bottom: 12px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--border);
  margin-top: 8px;
}

/* AB toggle row */
.ab-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.ab-toggle-row label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-dim);
}
#ab-fields { display: none; }
#ab-fields.visible { display: block; }

/* Range slider */
.range-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
}
.range-wrap input[type=range] {
  flex: 1;
  -webkit-appearance: none;
  height: 4px;
  border-radius: 2px;
  background: var(--border-light);
  outline: none;
  cursor: pointer;
}
.range-wrap input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: 2px solid var(--bg-2);
  box-shadow: 0 0 6px rgba(59,130,246,0.4);
}
.range-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  min-width: 50px;
  text-align: right;
}

/* ── Checkbox group ────────────────────────────────────────────────────────── */
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--text-dim);
  font-size: 12px;
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg-4);
  transition: all 0.15s;
  user-select: none;
}

.checkbox-item:hover { border-color: var(--border-light); color: var(--text); }

.checkbox-item input[type=checkbox] {
  width: 13px; height: 13px;
  accent-color: var(--accent);
  cursor: pointer;
}

.checkbox-item:has(input:checked) {
  border-color: rgba(59,130,246,0.4);
  background: var(--accent-glow);
  color: var(--accent);
}

/* ── Tag input ─────────────────────────────────────────────────────────────── */
.tag-input-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 6px 8px;
  cursor: text;
  min-height: 38px;
  align-items: center;
  transition: border-color 0.15s;
}
.tag-input-wrap:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--accent-glow);
  border: 1px solid rgba(59,130,246,0.3);
  color: var(--accent);
  padding: 1px 7px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.tag-remove { cursor: pointer; opacity: 0.6; font-size: 13px; }
.tag-remove:hover { opacity: 1; }

.tag-input {
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 12px;
  font-family: inherit;
  min-width: 80px;
}

/* ── Drawer ────────────────────────────────────────────────────────────────── */
.drawer-overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  z-index: 300;
  justify-content: flex-end;
}
.drawer-overlay.open { display: flex; }

.drawer {
  width: 420px;
  max-width: 100vw;
  height: 100vh;
  background: var(--bg-2);
  border-left: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: -8px 0 40px rgba(0,0,0,0.5);
  animation: slideIn 0.2s ease;
}

@keyframes slideIn {
  from { transform: translateX(40px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

.drawer-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-3);
  flex-shrink: 0;
  gap: 12px;
}

.drawer-meta { flex: 1; min-width: 0; }
.drawer-title { font-size: 14px; font-weight: 700; color: var(--text); }
.drawer-subtitle { font-size: 11px; color: var(--text-muted); margin-top: 3px; }

#drawer-content { padding: 0 0 20px; }

.detail-section {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}
.detail-section:last-child { border-bottom: none; }

.detail-section-title {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--accent);
  margin-bottom: 10px;
}

.detail-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0;
}

.detail-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  min-width: 120px;
  flex-shrink: 0;
}

.detail-value {
  font-size: 12px;
  color: var(--text-dim);
  word-break: break-all;
  flex: 1;
}

.detail-code {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 8px 10px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: var(--text-dim);
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
  margin-top: 6px;
}

/* ── Toast ─────────────────────────────────────────────────────────────────── */
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 500;
  box-shadow: var(--shadow);
  animation: toastIn 0.25s ease;
  border: 1px solid;
  max-width: 320px;
}

@keyframes toastIn {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

.toast.success { background: var(--success-bg); border-color: rgba(16,185,129,0.3); color: var(--success); }
.toast.error   { background: var(--danger-bg);  border-color: rgba(239,68,68,0.3);  color: var(--danger); }

/* ── Scrollbar ─────────────────────────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

/* ── Responsive ────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .sidebar { width: 56px; }
  .sidebar-logo .logo-text, .nav-label { display: none; }
  .sidebar-logo { justify-content: center; padding: 16px 0; }
  .main { margin-left: 56px; padding: 16px; }
  .form-row { grid-template-columns: 1fr; }
  .drawer { width: 100vw; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
