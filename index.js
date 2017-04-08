var express = require('express');
var bodyParser = require('body-parser');
var session = require('cors');
var connectionString = "postgres://MikeB@localhost/barap";
var controller = require('./Controllers/productCtrl')
var massive = require('massive');
var port = 8080;
var cors = require('cors');

var massiveInstance = massive.connectSync({connectionString : connectionString});


var app = express();

app.use(express.static(__dirname + '/public'));

var corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.set('db', massiveInstance);

var db = app.get('db');
controller.setDb(db);

app.listen(port, function(){
  console.log('now listening on port ' + port)
})

app.get('/api/product', controller.get);
