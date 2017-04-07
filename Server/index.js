var express = require('express');
var bodyParser = require('body-parser');
var session = require('cors');
var connectionString = "postgres://MikeB@localhost/barap";
var controller = require('./Controllers/productCtrl')

var massiveInstance = massive.connectSync({connectionString : connectionString});


var app = express();

app.use(bodyParser.json());

app.set('db', massiveInstance);

var db = app.get('db');
controller.setDb(db);

app.listen(3000, function(){
  console.log('now listening on port 3000')
})

app.get('/api/product', controller.get);
