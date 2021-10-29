const { Song } =  require('../models/song.model');

class SongService {
    create(data) {
        try {
            Song.create({
                number_list: data.number_list,
                name: data.name,
                id_album: data.id_album
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    getById(id_song) {
        try {
            return Song.findOne({ where: { id_song } });
        } catch (error) {
            throw new Error(error);
        }
    }

    getAll() {
        try {
            return Song.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    update(id_song, data) {
        try {
            return Song.update({
                number_list: data.number_list,
                name: data.name,
                id_album: data.id_album
            }, {
                where: { id_song } 
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    delete(id_song) {
        try {
            return Song.destroy({ where: { id_song } });
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new SongService();