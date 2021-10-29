const SongService = require('../services/song.service');

const postSong = async(req, res) => {
    try {
        await SongService.create(req.body);
        res.status(200).json({ message: 'Song created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getOneSong = async(req, res) => {
    const { id } = req.params;
    try {
        const song = await SongService.getById(id);
        song ? res.status(200).json(song) : res.status(404).json({ message: 'Song not found' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllSongs = async(req, res) => {
    try {
        const songs = await SongService.getAll();
        res.status(200).json(songs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const putSong = async(req, res) => {
    const { id } = req.params;
    try {
        await SongService.update(id, req.body);
        res.status(200).json({ message: 'Song updated' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteSong = async(req, res) => {
    const { id } = req.params;
    try {
        await SongService.delete(id);
        res.status(200).json({ message: 'Song deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



module.exports = {
    postSong,
    getOneSong,
    getAllSongs,
    putSong,
    deleteSong
}