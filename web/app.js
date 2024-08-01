// web/app.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'example',
  database: 'test'
});

db.connect(err => {
  if (err) {
    console.error('Could not connect to db:', err);
    process.exit(1);
  }
  console.log('Connected to db');
});

app.get('/', (req, res) => {
  db.query('SELECT message FROM greetings', (err, results) => {
    if (err) throw err;
    res.send(results[0].message);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
