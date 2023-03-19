const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const {Team} = require("./index");

const Trainer = sequelize.define('trainer', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	first_name: {type: DataTypes.STRING(100), allowNull: false},
	second_name: {type: DataTypes.STRING(100), allowNull: false},
	patronymic: {type: DataTypes.STRING(100)},
	birthday: {type: DataTypes.DATEONLY},
	gender: {type: DataTypes.ENUM('male', 'female')},
	photo: {type: DataTypes.STRING}
});


module.exports = Trainer;
