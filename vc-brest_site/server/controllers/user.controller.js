const db = require('../db');
const {next} = require("lodash/seq");
const ApiError = require('../errors/api.error')

class UserController {
	async registration(req, res){

	};
	async login(req, res){};

	async checked(req, res, next){
		const {id} = req.query;
		if(!id){
			return next(ApiError.badRequest('Не задан ID'))
		}
		res.json(id);
	};

}

module.exports = new UserController();
