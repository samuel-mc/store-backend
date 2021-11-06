const express = require('express');
const app = express();

const { checkArtistData } = require('../middlewares/album.mid');

const {
    postArtist,
    getAllArtists,
    getOneArtist,
    putArtistName,
    putArtistSells,
    deleteArtist
} = require('../controllers/artist.controller');

// Routes for the artist
app.post('/', checkArtistData, postArtist);
app.get('/', getAllArtists);
app.get('/:id', getOneArtist);
app.put('/:id/name', checkArtistData, putArtistName);
app.put('/:id/sells', putArtistSells);
app.delete('/:id', deleteArtist);

module.exports = app;