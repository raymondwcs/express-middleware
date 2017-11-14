var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// Middleware that serves static files in the public folder
// GET /index.html
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login',function(req,res,next) {
   res.write('ID = ' + req.body.id);
   res.end('PASSWORD = ' + req.body.password);
});

app.listen(process.env.PORT || 8099);