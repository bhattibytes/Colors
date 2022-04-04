const express = require('express');
const cors = require('cors')
const Color = require('../DB/database');

const app = express();

const PORT = 8080;

// app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type'
  );

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/colors', async(req, res) => { // Get all colors from DB
  try {
    const colors = await Color.query('SELECT * FROM colors');
    res.send(colors);
  }
  catch(err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});