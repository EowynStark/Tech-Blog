// required packages and files 
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Post = require('./post');

// Comment model
const Comment = sequelize.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comment: {
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

Comment.beforeCreate((comment, options) => {
    comment.createdAt = new Date();
});

// Comment associations
Comment.belongsTo(User, { foreignKey: 'createdBy', targetKey: 'username' });
Comment.belongsTo(Post, { foreignKey: 'postId', targetKey: 'id' });

module.exports = Comment;
