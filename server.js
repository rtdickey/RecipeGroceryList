var config = require('./config.js');
var app = config.app;
var testdata = require('./testdata.js');
var home = require('./routes/home.js');

testdata.createData;

app.listen(3000)