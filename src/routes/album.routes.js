const express = require('express');
const app = express();

const { checkAlbumData } = require('../middlewares/album.mid');

const {
    postAlbum,
    getAllAlbums,
    getOneAlbum,
    putAlbum,
    deleteAlbum
} = require('../controllers/album.controller')

// Routes for the albums
app.post('/', checkAlbumData, postAlbum);
app.get('/', getAllAlbums);
app.get('/:id', getOneAlbum);
app.put('/:id', checkAlbumData, putAlbum);
app.delete('/:id', deleteAlbum);

module.exports = app;