const ArtistService = require('../services/artist.service');

const postArtist = async (req, res) => {
    const { name } = req.body;
    try {
        const artist = await ArtistService.create(name);
        res.status(201).json({ message: 'Artist created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllArtists = async (req, res) => {
    try {
        const artists = await ArtistService.getAll();
        res.status(200).json({ artists });
    } catch (error) {
        res.status(500).json({ message : error });
    }
};

const getOneArtist = async (req, res) => {
    const { id } = req.params;
    try {
        const artist = await ArtistService.getById(id);
        !artist ? res.status(404).json({ message: 'Artist not found' }) : res.status(200).json({ artist });
    } catch (error) {
        res.status(500).json({ message : error });
    }
};

const putArtistName = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        await ArtistService.updateName(id, name);
        res.status(200).json({ message: 'Artist updated' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

const putArtistSells = async (req, res) => {
    const { id } = req.params;
    try {
        await ArtistService.updateSells(id);
        res.status(200).json({ message: 'Artist updated' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteArtist = async (req, res) => {
    const { id } = req.params;
    try {
        await ArtistService.delete(id);
        res.status(200).json({ message: 'Artist deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    postArtist,
    getAllArtists,
    getOneArtist,
    putArtistName,
    putArtistSells,
    deleteArtist
};