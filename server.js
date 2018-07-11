// mongodb://root:zuccIsMoot1@ds253889.mlab.com:53889/palyhacks
const express = require('express');
const app = express();
const routes = require('./Routes/routes.js');

app.use('/', routes)

app.listen(3000, () => console.log('Running on 3000'));