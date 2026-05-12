require('dotenv').config();
const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────

app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Auth middleware ───────────────────────────────────────────────────────────

const adminUser = process.env.ADMIN_USER || 'admin';
const adminPass = process.env.ADMIN_PASS || 'changeme';

const auth = basicAuth({
  users: { [adminUser]: adminPass },
  challenge: true,
  realm: 'Cloaker Admin'
});

// ── Static assets ─────────────────────────────────────────────────────────────

app.use('/static', express.static(path.join(__dirname, '../public/admin')));

// ── Root route ────────────────────────────────────────────────────────────────

app.get('/', (req, res) => {
  res.redirect('/admin');
});

// ── Protected routes ──────────────────────────────────────────────────────────

app.use('/admin', auth, require('./routes/admin'));
app.use('/api', auth, require('./routes/api'));

// ── Redirect routes ───────────────────────────────────────────────────────────

app.use('/', require('./routes/redirect'));

// ── Error handler ─────────────────────────────────────────────────────────────

app.use((err, req, res, _next) => {
  console.error('[server] unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Boot ──────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Cloaker running on port ${PORT}`);
});

module.exports = app;
