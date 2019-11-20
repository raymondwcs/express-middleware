const express = require('express');

const app = express();

// Middleware example
// - change value of query string parameter 'name' to 'snoopy' unconditionally
// example:
// GET /hello?name=ray   => GET /hello?name=snoopy
//
const myMiddleware = (req,res,next) => {
  console.log(`BEFORE: ${req.method} ${req.originalUrl}`);
  req.query.name = 'snoopy';
  next();
}
//app.use(myMiddleware);

app.get('/hello', (req,res,next) => {
  res.status(200).end(`Hi, ${req.query.name}`);
})

app.listen(process.env.PORT || 8099);