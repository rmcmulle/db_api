const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('./config/db');

const app         = express();

const port        = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Initiate pug for templating
app.set('view engine', 'pug');
app.set('views', './views');

MongoClient.connect(db.url, function (err, database) {
  if (err) return console.log(err);
  require('./app/routes')(app, database);

  app.listen(port, function() {
    console.log("API server is live on port " + port);
  });
});
