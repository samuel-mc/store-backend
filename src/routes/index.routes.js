const express = require('express');
const app = express();

app.use('/albums', require('./album.routes.js'));
app.use('/artists', require('./artist.routes.js'));
app.use('/genres', require('./genre.routes.js'));
// app.use('/songs', require('./song.routes.js'));

module.exports = app;