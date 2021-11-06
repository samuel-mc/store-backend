const express = require('express');
const app = express();

const { checkGenreData } = require('../middlewares/album.mid');

const {
    postGenre,
    getOneGenre,
    getAllGenres,
    putGenre,
    deleteGenre
} = require('../controllers/genre.controller');

app.post('/', checkGenreData, postGenre);
app.get('/:id', getOneGenre);
app.get('/', getAllGenres);
app.put('/:id', checkGenreData, putGenre);
app.delete('/:id', deleteGenre);

module.exports = app;