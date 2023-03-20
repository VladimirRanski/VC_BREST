const authMiddleware = require('./authMiddleware');
const errorHandlingMiddleware = require('./errorHandlingMiddleware');
const checkRoleMiddleware = require('./checkRoleMiddleware');

module.exports = {
	authMiddleware,
	errorHandlingMiddleware,
	checkRoleMiddleware
}
