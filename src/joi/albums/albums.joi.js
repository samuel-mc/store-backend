const Joi = require('joi');

module.exports.validateAlbumData = Joi.object().keys({
    title: Joi.string().required(),
    year: Joi.number().integer().min(1950).max(2030).required(),
    cover: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.number().integer().required(),
    id_artist: Joi.number().integer().required(),
    id_genre: Joi.number().integer().required(),
    name_artist: Joi.string(),
    name_genre: Joi.string()
});

module.exports.validateArtistData = Joi.object().keys({
    name: Joi.string().required()
});

module.exports.validateGenreData = Joi.object().keys({
    name: Joi.string().required()
})

module.exports.validateSongData = Joi.object().keys({
    number_list: Joi.number().integer().required(),
    name: Joi.string().required(),
    id_album: Joi.number().integer().required()
});