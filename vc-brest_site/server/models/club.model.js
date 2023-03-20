const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const {Team, ClubAdministration, Sponsor} = require('./index')

const Club = sequelize.define('club', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING(100), allowNull: false, unique: true},
	city: {type: DataTypes.STRING(100), allowNull: false},
	foundation_date: {type: DataTypes.DATEONLY},
	logo: {type: DataTypes.STRING},
}, {timestamps: false});


module.exports = Club;
