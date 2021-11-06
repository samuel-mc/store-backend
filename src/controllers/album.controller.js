
const AlbumService = require('../services/album.service');
const ArtistService = require('../services/artist.service');
const GenreService = require('../services/genre.service');

const postAlbum = async (req, res) => {
    let { id_artist, id_genre } = req.body;
    if (id_artist === 0) {
        try {
            const artist = await ArtistService.create(req.body.name_artist);
            id_artist = artist.dataValues.id_artist;
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    if (id_genre === 0) {
        try {
            const genre = await GenreService.create(req.body.name_genre);
            id_genre = genre.dataValues.id_genre;
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    const data ={
        title: req.body.title,
        year: req.body.year,
        cover: req.body.cover,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        id_artist,
        id_genre
    }

    try {
        await AlbumService.create(data);
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