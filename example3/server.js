var express = require('express');
var app = express();

var nhelp = 0;

app.get('/', (req,res,next) => {
  res.send('Hello World!');
});

// middleware that tracks the number of /help was called
app.use('/help', (req,res,next) => { 
  console.log('/help: requested %d times', ++nhelp);
  next();
})

app.get('/help', (req,res,next) => {
  res.send('Nope.. nothing to see here');
});

app.listen(process.env.PORT || 8099);
