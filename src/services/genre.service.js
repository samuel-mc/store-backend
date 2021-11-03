const { Genre } = require('../models/genre.model');

class GenreService {
    create(name) {
        try {
            const genre = Genre.create({ name });
            return genre;
        } catch (error) {
            throw new Error(error);
        }
    }

    getById(id_genre) {
        try {
            return Genre.findOne({ where: { id_genre }})
        } catch (error) {
            throw new Error(error);
        }
    }

    getAll() {
        try {
            return Genre.findAll({});
        } catch (error) {
            throw new Error(error);
        }
    }

    update(id_genre, name) {
        try {
            Genre.update({ name }, { where: { id_genre }})
        } catch (error) {
            throw new Error(error);
        }
    }

    delete(id_genre) {
        try {
            Genre.destroy({ where: { id_genre }})
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new GenreService();