var config = require('../config.js');
var app = config.app;
var User = require('../models/user.js');

app.get('/', function (req, res) {
  	User.findOne({
	  	where: {
	  		id: 1
	  	}
	}).then(function(user) {
		res.send(user.firstName + ' ' + user.lastName);
	})
})