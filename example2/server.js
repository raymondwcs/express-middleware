var express = require('express');
var app = express();

app.use(function(req,res,next) {  // logger middleware
  console.log(req.method + ' ' + req.url +  ' was requested at ' + Date.now());
  next();
})

app.use(function(req,res,next) {  // Mac disciminator middlware
  console.log(JSON.stringify(req.headers));
  if (req.headers['user-agent'].indexOf('Mac')) {
    res.end('We do not support Apple Computers!')
  } else {
    next();
  }
});

app.get('/', function(req,res,next) {
  res.send('Hello World!');
});

app.get('/help', function(req,res,next) {
  res.send('Nope.. nothing to see here');
});

app.listen(process.env.PORT || 8099);
