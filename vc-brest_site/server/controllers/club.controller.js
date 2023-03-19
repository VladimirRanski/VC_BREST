const path = require('path');
const uuid = require('uuid');
const {Club} = require('../models');
const ApiError = require('../errors/api.error');


class ClubController {


	async createClub(req, res, next) {
		try {
			const {name, city, foundation_date} = req.body;
			const {logo} = req.files
			let fileName = uuid.v4() + ".jpeg";
			await logo.mv(path.resolve(__dirname, '..', 'static', fileName))
			const club = await Club.create({
				name, city, foundation_date, logo: fileName
			});
			return res.json(club);
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	};

	async getClubAll(req, res) {
		let clubs;
		let {id, name, city, foundation_date, page, limit} = req.query;

		page = page || 1;
		limit = limit || 10;
		let offset = page * limit - limit;

		if (!name && !city && !foundation_date && !id) {
			clubs = await Club.findAndCountAll({limit, offset})
		}

		if (name && !city && !foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {name}, limit, offset
			})
		}

		if (!name && city && !foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {city}, limit, offset
			})
		}

		if (!name && !city && foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {foundation_date}, limit, offset
			})
		}

		if (!name && !city && !foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {id}, limit, offset
			})
		}

		if (name && city && !foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {name, city}, limit, offset
			})
		}

		if (name && !city && foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {name, foundation_date}, limit, offset
			})
		}

		if (name && !city && !foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {name, id}, limit, offset
			})
		}

		if (!name && city && foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {city, foundation_date}, limit, offset
			})
		}

		if (!name && city && !foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {city, id}, limit, offset
			})
		}

		if (!name && !city && foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {foundation_date, id}, limit, offset
			})
		}

		if (name && city && foundation_date && !id) {
			clubs = await Club.findAndCountAll({
				where: {name, city, foundation_date}, limit, offset
			})
		}

		if (!name && city && foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {city, foundation_date, id}, limit, offset
			})
		}

		if (name && !city && foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {name, foundation_date, id}, limit, offset
			})
		}

		if (name && city && !foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {name, city, id}, limit, offset
			})
		}

		if (name && city && foundation_date && id) {
			clubs = await Club.findAndCountAll({
				where: {name, city, foundation_date, id}, limit, offset
			})
		}

		return res.json(clubs)
	};

	async getClubOne(req, res) {
		const {id} = req.params;
		const club = await Club.findByPk(id);
		return res.json(club)
	};

	async updateClub(req, res) {
	};

	async deleteClub(req, res) {
	};
}

module.exports = new ClubController();
