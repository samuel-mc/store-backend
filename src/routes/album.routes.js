const express = require('express');
const app = express();

const {
    postAlbum,
    getAllAlbums,
    getOneAlbum,
    putAlbum,
    deleteAlbum
} = require('../controllers/album.controller')

// Routes for the albums
app.post('/', postAlbum);
app.get('/', getAllAlbums);
app.get('/:id', getOneAlbum);
app.put('/:id', putAlbum);
app.delete('/:id', deleteAlbum);

module.exports = app;