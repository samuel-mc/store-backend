const express = require('express');
const app = express();

const {
    postGenre,
    getOneGenre,
    getAllGenres,
    putGenre,
    deleteGenre
} = require('../controllers/genre.controller');

app.post('/', postGenre);
app.get('/:id', getOneGenre);
app.get('/', getAllGenres);
app.put('/:id', putGenre);
app.delete('/:id', deleteGenre);

module.exports = app;