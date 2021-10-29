const { Sequelize } =  require('sequelize');
const { Song } = require('./song.model');
const db = require('../db/db.connection');

const Album =  db.define('album', {
    id_album: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    year: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    cover: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    description: {
        allowNull: false,
        type: Sequelize.TEXT,
    },
    price: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },
    stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
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

Album.hasMany(Song, { as: 'Songs', foreignKey: 'id_album' });
Song.belongsTo(Album, { foreignKey: 'id_album' });


module.exports = { Album };