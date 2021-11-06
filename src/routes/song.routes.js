const express = require('express');
const app = express();

const { checkSongData } = require('../middlewares/album.mid');

const {
    postSong,
    getOneSong,
    getAllSongs,
    putSong,
    deleteSong
} = require('../controllers/song.controller');


app.post('/', checkSongData, postSong);
app.get('/:id', getOneSong);
app.get('/', getAllSongs);
app.put('/:id', checkSongData, putSong);
app.delete('/:id', deleteSong);

module.exports = app;