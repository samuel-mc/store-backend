const { Sequelize } =  require('sequelize');
const { Album } = require('./album.model');
const db = require('../db/db.connection');

const Artist = db.define('artist', {
    id_artist: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sells: {
        allowNull: false,
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

Artist.hasMany(Album, { as: 'Albums', foreignKey: 'id_artist'});
Album.belongsTo(Artist, { foreignKey: 'id_artist'});

module.exports = { Artist };