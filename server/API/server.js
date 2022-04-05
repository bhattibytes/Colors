const express = require('express');
require('dotenv').config();
const cors = require('cors')
const Color = require('../DB/database');
var https = require('https');
var fs = require('fs');

const app = express();

const PORT = 8080;

app.use(cors())

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

if (process.env.NODE_ENV === "production") {
  var https_options = {
    key: fs.readFileSync(process.env.sslKey),
    cert: fs.readFileSync(process.env.sslCert),

  }; 
  https.createServer(https_options, app).listen(443);
} else {
  app.listen(PORT, () => {
    console.log(`Server listening at port:${PORT}!`);
  });
}