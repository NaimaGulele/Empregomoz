const express = require('express');
const path    = require('path');
const app     = express();

// Serve static files (CSS, JS, images)
app.use('/public', express.static(path.join(__dirname, '../public')));

// All routes serve the main HTML page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Emprego Moz running on http://localhost:' + PORT));

module.exports = app;
