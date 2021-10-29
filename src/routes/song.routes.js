const express = require('express');
const app = express();

const = {
    postSong,
    getOneSongs,
    getAllSongs,
}


app.post('/', postSong);
app.get('/:id', getOneSongs);
app.get('/', getAllSongs);

module.exports = app;