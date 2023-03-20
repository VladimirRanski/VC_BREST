const sequelize = require("../db");
const {DataTypes} = require("sequelize");
const {Club} = require("./index");

const Sponsor = sequelize.define('sponsor', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, allowNull: false},
	city: {type: DataTypes.STRING},
	logo: {type: DataTypes.STRING}
}, {timestamps: false});


module.exports = Sponsor;
