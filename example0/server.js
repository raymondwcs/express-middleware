const express = require('express');
const app = express();

// Middleware that serves static files in the 'public' folder
// GET /index.html
app.use(express.static('public'));

app.listen(process.env.PORT || 8099);
