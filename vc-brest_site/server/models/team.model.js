const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const path = require("path");
const {Player, Trainer, Club} = ('./index');

const Team = sequelize.define('team', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING(100), unique: true, allowNull: false},
	city: {type: DataTypes.STRING(100), allowNull: false},
	gender: {type: DataTypes.ENUM('male', 'female')},
	home_area: {type: DataTypes.STRING},
	foundation_date: {type: DataTypes.DATEONLY},
	logo: {type: DataTypes.STRING}
});


module.exports = Team;
