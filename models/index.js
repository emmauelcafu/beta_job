const sequelize = require('../config/database');
const Post = require('./formPost');
const Comment = require('./comment');

const initModels = async () => {
    await sequelize.sync({ alter: true }); // Sincroniza modelos con la BD
};

module.exports = {
    Post,
    Comment,
    initModels
};