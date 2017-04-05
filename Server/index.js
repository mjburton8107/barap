var express = require('express');
var bodyParser = require('body-parser');
var session = require('cors');

var app = express();

app.use(bodyParser.json());

app.listen(3000, function(){
  console.log('now listening on port 3000')
})

app.get()
