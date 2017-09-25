var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://rolapenta:rodrigo@ds149134.mlab.com:49134/redbeetest";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.createCollection("locations", function(err, res) {
		if (err) throw err;
		console.log("'locations' collection created!");
		db.close();
	});
	db.createCollection("users", function(err, res) {
		if (err) throw err;
		console.log("'users' collection created!");
		db.close();
	});
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/locations', function (req, res) {
	console.log(req.body);
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.collection("locations").insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			db.close();
		});
	});
	
	res.send(req.body);
});

app.post('/users', function (req, res) {
	console.log(req.body);
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.collection("users").insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			db.close();
		});
	});
	
	res.send(req.body);
});

app.listen(app.get('port'), function() {
	console.log("Node app is running at port" + app.get('port'))
})