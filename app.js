var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://rolapenta:rodrigo@ds149134.mlab.com:49134/redbeetest";

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("locations", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/locations', function (req, res) {
	console.log(req.body);
  /*db.collection("locations").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });*/
  //res.send('Hello World!');
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});