const { Artist } = require('../models/artist.model');

class ArtistService {

    getAll() {
        try {
            return Artist.findAll({});
        } catch (error) {
            throw new Error(error);
        }
    }

    getById(id_artist) {
        try {
            return Artist.findOne({ where: { id_artist } });
        } catch (error) {
            throw new Error(error);
        }
    }

    create(name) {
        try {
            Artist.create({ name, sells: 0 });
        } catch (error) {
            throw new Error(error);
        }
    }

    updateName(id_artist, name) {
        try {
            Artist.update({ name }, { where: { id_artist } });
        } catch (error) {
            throw new Error(error);
        }
    }

    updateSells(id_artist) {
        try {
            Artist.increment('sells', { where: { id_artist } });
        } catch (error) {
            throw new Error(error);
        }
    }

    delete(id_artist) {
        try {
            Artist.destroy({ where: { id_artist } });
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new ArtistService();