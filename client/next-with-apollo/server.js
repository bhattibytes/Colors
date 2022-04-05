const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const port = 3000;
const Color = require('./DB/database');


const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    createServer({}, async (req, res) => {
        const parsedUrl = parse(req.url, true);
        if (parsedUrl.pathname === "/api/colors") {
          try {
            const colors = await Color.query('SELECT * FROM colors');
            res.end(JSON.stringify(colors));
          }
          catch(err) {
            console.log(err);
          }
        } else {
          handle(req, res, parsedUrl);
        }
    }).listen(port, (err) => {
        if (err) throw err;
        console.log("ready - started server on url: https://localhost:" + port);
    });
});