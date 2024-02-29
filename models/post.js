// required packages and files
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Comment = require('./comment');

// Post model
const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdBy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
});

Post.beforeCreate((post, options) => {
    post.createdAt = new Date();
});

// Post associations
Post.belongsTo(User, { foreignKey: 'createdBy', targetKey: 'username' });
Post.hasMany(Comment, { foreignKey: 'postId', sourceKey: 'id' });

module.exports = Post;

