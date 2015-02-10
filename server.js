var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var request = require('request');
var cors = require('cors');

var accountSid = 'AC7b6df278ee6439fc65aec582bfbff804';
var authToken = '7f67b65d4334dc4ff74107a8f4f2eca2';
var client = require('twilio')(accountSid, authToken);
var port = 8080;

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

// var sync = Firebase(new Firebase('https://textsupportjeff.firebaseio.com/numbers'));
// var numbers = sync.$asArray();


app.post('/api/support/messages', function(req, res) {
	client.messages.create({
		body: req.body.response,
		to: req.body.number,
		from: '+19253266233'
	}, function(err, message) {
			if (err) {
				console.log(err);
				res.status(400).send('error sending message');
			} else {
				res.status(200).json('message sent successfuly');
				numbers.$save({response: req.body.response});
			}
	})
});


app.listen(port);