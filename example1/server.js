var express = require('express');
var app = express();

app.use(function(req,res,next) {
  console.log(req.method + ' ' + req.url +
              ' was requested at ' + Date(Date.now()).toString());
  next();
})

app.get('/', function(req, res, next) {
  res.send('Hello World!');
});

app.get('/help', function(req, res, next) {
  res.send('Nope.. nothing to see here');
});

app.listen(process.env.PORT || 8099);
