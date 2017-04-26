var config = require('./config.js');
var app = config.app;
var testdata = require('./testdata.js');
var home = require('./routes/home.js');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

testdata.createData;

app.listen(3000);