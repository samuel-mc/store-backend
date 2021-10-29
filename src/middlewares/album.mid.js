const Joi = require('joi');

const { 
    validateAlbumData,
    validateArtistData,
    validateGenreData,
    validateSongData
} = require('../joi/albums/albums.joi');

const checkAlbumData = async (req, res, next) => {
    try {
        await Joi.attempt(req.body, validateAlbumData);
        return next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const checkArtistData = async (req, res, next) => {
    try {
        await Joi.attempt(req.body, validateArtistData);
        return next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const checkGenreData = async (req, res, next) => {
    try {
        await Joi.attempt(req.body, validateGenreData);
        return next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const checkSongData = async (req, res, next) => {
    try {
        await Joi.attempt(req.body, validateSongData);
        return next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    checkAlbumData,
    checkArtistData,
    checkGenreData,
    checkSongData
}