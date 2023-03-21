const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const Game = sequelize.define('game', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
/*	host_team: {},
	guest_team: {},
	location_game: {},
	time_game: {},
	date_game: {}*/
}, {timestamps: false})

module.exports = Game
