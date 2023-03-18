const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, unique: true, allowNull: false},
	password: {type: DataTypes.STRING, allowNull: false},
	role: {type: DataTypes.STRING, defaultValue: "User"}
});

const Club = sequelize.define('club', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING(100), allowNull: false, unique: true},
	city: {type: DataTypes.STRING(100), allowNull: false},
	foundation_date: {type: DataTypes.DATEONLY},
	logo: {type: DataTypes.STRING}
});

const ClubAdministration = sequelize.define('club_administration', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	first_name: {type: DataTypes.STRING, allowNull: false},
	second_name: {type: DataTypes.STRING, allowNull: false},
	patronymic: {type: DataTypes.STRING, allowNull: true},
	phone_number: {type: DataTypes.STRING},
	photo: {type: DataTypes.STRING}
});

const Sponsor = sequelize.define('sponsorship', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, allowNull: false},
	city: {type: DataTypes.STRING},
	logo: {type: DataTypes.STRING}
});

const Team = sequelize.define('team', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING(100), unique: true, allowNull: false},
	city: {type: DataTypes.STRING(100), allowNull: false},
	gender: {type: DataTypes.ENUM('male', 'female')},
	home_area: {type: DataTypes.STRING},
	foundation_date: {type: DataTypes.DATEONLY},
	logo: {type: DataTypes.STRING}
});

const Player = sequelize.define('player', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	first_name: {type: DataTypes.STRING(100), allowNull: false},
	second_name: {type: DataTypes.STRING(100), allowNull: false},
	patronymic: {type: DataTypes.STRING(100)},
	birthday: {type: DataTypes.DATEONLY},
	height: {type: DataTypes.INTEGER},
	gender: {type: DataTypes.ENUM('male', 'female')},
	photo: {type: DataTypes.STRING}
});

const Trainer = sequelize.define('trainer', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	first_name: {type: DataTypes.STRING(100), allowNull: false},
	second_name: {type: DataTypes.STRING(100), allowNull: false},
	patronymic: {type: DataTypes.STRING(100)},
	birthday: {type: DataTypes.DATEONLY},
	gender: {type: DataTypes.ENUM('male', 'female')},
	photo: {type: DataTypes.STRING}
});

Club.hasMany(Team);
Team.belongsTo(Club);

Club.hasMany(ClubAdministration);
ClubAdministration.belongsTo(Club);

Club.hasMany(Sponsor);
Sponsor.belongsTo(Club);

Team.hasMany(Player);
Player.belongsTo(Team);

Team.hasMany(Trainer);
Trainer.belongsTo(Team);


module.exports = {
	Club,
	ClubAdministration,
	Team,
	Player,
	Trainer,
	Sponsor,
	User
};
