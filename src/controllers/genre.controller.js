const GenreService = require('../services/genre.service');

const postGenre =  async (req, res) => {
    const { name } = req.body;
    try {
        await GenreService.create(name);
        res.status(201).json({ message: 'Genre created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getOneGenre = async (req, res) => {
    const { id } = req.params;
    try {
        const genre = await GenreService.getById(id);
        res.status(200).json(genre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllGenres = async (req, res) => {
    try {
        const genres = await GenreService.getAll();
        res.status(200).json(genres);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const putGenre = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        await GenreService.update(id, name);
        res.status(200).json({ message: 'Genre updated' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteGenre = async (req, res) => {
    const { id } = req.params;
    try {
        await GenreService.delete(id);
        res.status(200).json({ message: 'Genre deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    postGenre,
    getOneGenre,
    getAllGenres,
    putGenre,
    deleteGenre
}