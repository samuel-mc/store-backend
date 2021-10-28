const express = require('express');
const app = express();

app.use(require('./artist.routes.js'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;