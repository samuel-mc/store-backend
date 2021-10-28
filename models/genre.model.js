const { Sequelize } =  require('sequelize');
const db = require('../db/db.connection');
const { Album } = require('./album.model');

const Genre = db.define('genre', {
    id_genre: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

Genre.hasMany(Album, { as: 'Albums', foreignKey: 'id_genre'});
Album.belongsTo(Genre, { foreignKey: 'id_genre'});

module.exports = { Genre };
