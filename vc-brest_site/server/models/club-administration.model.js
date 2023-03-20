const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const ClubAdministration = sequelize.define('club_administration', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	first_name: {type: DataTypes.STRING, allowNull: false},
	second_name: {type: DataTypes.STRING, allowNull: false},
	patronymic: {type: DataTypes.STRING, allowNull: true},
	phone_number: {type: DataTypes.STRING},
	photo: {type: DataTypes.STRING}
}, {timestamps: false});


module.exports = ClubAdministration;
