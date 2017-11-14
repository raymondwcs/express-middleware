var express = require('express');
var app = express();

// middleware that modifies the request object
app.use(function(req,res,next) { 
  req.query['user'] = "demo"; // insert a querystrng variable
  next();
})

app.get('/', function(req,res,next) {
  console.log(JSON.stringify(req.query));
  res.send('Hello World! You must be ' + req.query.user);
});

app.listen(process.env.PORT || 8099);
