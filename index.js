var express = require('express')
var http = require('http');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var session = require('express-session');
var spawn = require('child_process').spawn;
var fs = require('fs');

// Load the config
var config = null;
fs.readFile('./config.json', function(err, data) {
    config = JSON.parse(data);
});



var app = express();
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('combined'));
app.use(session({secret: 'lalalala'}));

var server = require('http').Server(app);
var io = require('socket.io')(server);



if ('development' == app.get('env')) {
    app.use(errorHandler());
}


app.use('/static', express.static(__dirname + '/static'));


app.get('/', function(req, res) {
});


io.on('connection', function(socket) {
});



server.listen(5000, "0.0.0.0");
