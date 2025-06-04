const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use('/', express.static(path.join(__dirname ,'public')));

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

app.listen(PORT, () => {
  console.log(`App corriendo en ${PORT}`);
})