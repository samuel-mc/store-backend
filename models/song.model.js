const { Sequelize } =  require('sequelize');
const db = require('../db/db.connection');

const Song = db.define('song', {
    id_song: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    number_list: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING,
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

module.exports = { Song };