const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const PlayerStatistic = sequelize.define('player-statistic', {

}, {timestamps: false})

module.exports = PlayerStatistic
