const express = require('express');
const app = express();
const port = 3000;

app.get('/cost', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.json({ random: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
