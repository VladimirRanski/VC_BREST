const Club = require('./club.model')
const ClubAdministration = require('./club-administration.model')
const Player = require('./player.model')
const Sponsor = require('./sponsor.model')
const Team = require('./team.model')
const Trainer = require('./trainer.model')
const User = require('./user.model')


/** Keys **/
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
/** End Keys **/

module.exports = {
	Club,
	ClubAdministration,
	Team,
	Player,
	Trainer,
	Sponsor,
	User
};

