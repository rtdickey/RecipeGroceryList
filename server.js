var config = require('./config.js');
var app = config.app;
var User = require('./models/user.js');
var home = require('./routes/home.js');

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'Ryan',
    lastName: 'Dickey'
  });
});


app.listen(3000)