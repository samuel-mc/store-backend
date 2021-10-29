
const AlbumService = require('../services/album.service');

const postAlbum = async (req, res) => {
    try {
        await AlbumService.create(req.body);
        res.status(201).json({ message: 'Album created' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAllAlbums = async (req, res) => {
    try {
        const albums = await AlbumService.getAll();
        res.status(200).json(albums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        const album = await AlbumService.getById(id);
        !album ? res.status(404).json({ message: 'Album not found' }) : res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        await AlbumService.update(id, req.body);
        res.status(200).json({ message: 'Album updated' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        await AlbumService.delete(id);
        res.status(200).json({ message: 'Album deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    postAlbum,
    getAllAlbums,
    getOneAlbum,
    putAlbum,
    deleteAlbum
}