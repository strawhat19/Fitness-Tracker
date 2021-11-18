const express = require('express');
const htmlRoutes = require('./html-routes');
const apiRoutes = require('./api-routes');
const app = express();

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

module.exports = app;