var express = require('express');
var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World! from Docker');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
