const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true, allowNull: false},
	password: {type: DataTypes.STRING, allowNull: false},
	role: {type: DataTypes.STRING, allowNull: true, defaultValue: "User"}
}, {timestamps: false});


module.exports = User;
