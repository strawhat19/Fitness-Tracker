const express = require(`express`);
const htmlRoutes = require(`./html-routes`);
const apiRoutes = require(`./api-routes`);
const app = express();

app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);

module.exports = app;