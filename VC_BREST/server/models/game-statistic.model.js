const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const GameStatistic = sequelize.define('game_statistic', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, {timestamps:false})

module.exports = GameStatistic
