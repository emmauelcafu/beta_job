// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta el path según tu estructura

const Post = sequelize.define('Post', {
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vacantes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pago: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true
    },
    valoracion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    observacion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Post;
