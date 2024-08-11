const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./formPost');

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
});

Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

module.exports = Comment;
