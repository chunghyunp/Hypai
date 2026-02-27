const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const CONFIG_PATH = path.join(__dirname, '../config/navigation.json');

router.get('/', (req, res) => {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
    const config = JSON.parse(raw);
    res.json(config);
  } catch (err) {
    console.error('Failed to read navigation config:', err);
    res.status(500).json({ error: 'Failed to load navigation config' });
  }
});

module.exports = router;
