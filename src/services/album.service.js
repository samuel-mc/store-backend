const { Album } = require('../models/album.model');

class AlbumService {
    create(data) {
        try {
            Album.create({
                title: data.title,
                year: data.year,
                cover: data.cover,
                price: data.price,
                description: data.description,
                stock: data.stock,
                sells: 0,
                id_artist: data.id_artist,
                id_genre: data.id_genre,
            })
        } catch (error) {
            throw new Error(error);
        }
    }
    
    getAll() {
        try {
            return Album.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    getById(id_album) {
        try {
            return Album.findOne({ where: { id_album }});
        } catch (error) {
            throw new Error(error);
        }
    }

    update(id_album, data) {
        try {
            Album.update({
                title: data.title,
                year: data.year,
                cover: data.cover,
                price: data.price,
                description: data.description,
                stock: data.stock,
                id_artist: data.id_artist,
                id_genre: data.id_genre,
            }, {
                where: { id_album }
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    delete(id_album) {
        try {
            Album.destroy({ where: { id_album }});
        } catch (error) {
            throw new Error(error);
        }
    }

}

module.exports = new AlbumService();