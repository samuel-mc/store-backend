const express = require('express');
const app = express();

const {
    postArtist,
    getAllArtists,
    getOneArtist,
    putArtistName,
    putArtistSells,
    deleteArtist
} = require('../controllers/artist.controller');

// Routes for the artist
app.post('/artists', postArtist);
app.get('/artists', getAllArtists);
app.get('/artists/:id', getOneArtist);
app.put('/artists/:id/name', putArtistName);
app.put('/artists/:id/sells', putArtistSells);
app.delete('/artists/:id', deleteArtist);

module.exports = app;