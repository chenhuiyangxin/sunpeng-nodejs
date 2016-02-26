var express = require('express');
var app = express();

var db = require("./connect").db;

var bodyParser = require('body-parser');

var passport = require('passport');
var flash = require('connect-flash');


app.set('view engine', 'jade');
app.set('views', __dirname + '/view');
app.use(express.static(__dirname + '/static'));

app.use(bodyParser.urlencoded({ extended: true }));


var routes = require("./routes");


app.get('/main', routes.main);

app.get('/detail/:id', routes.detail);

app.get('/record', routes.record);




app.listen(3000);
console.log("server started at http://localhost:3000");
