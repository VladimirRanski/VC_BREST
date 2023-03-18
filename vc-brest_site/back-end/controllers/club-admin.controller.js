const {ClubAdministration, Club} = require('../models/models');
const ApiError = require('../errors/api.error');

class ClubAdminController {
	async createClubAdmin(req, res) {
		const {
			first_name, second_name, patronymic, phone_number, photo, clubId
		} = req.body;

		const clubAdmin = await ClubAdministration.create({
			first_name, second_name, patronymic, phone_number, photo, clubId
		});
		return await res.json(clubAdmin);
	};

	async getAllClubAdmin(req, res) {
		const clubAdmin = await ClubAdministration.findAll();
		return res.json(clubAdmin);
	};

	async getClubAdmin(req, res) {
		let idC = 'Пётр'
		const clubAdmin = await ClubAdministration.findOne({where: {first_name: idC}});
		return res.json(clubAdmin)
	};

	async updateClubAdmin(req, res) {
	};

	async deleteClubAdmin(req, res) {
		let idC = 'Пётр'
		const clubAdmin = await ClubAdministration.destroy({where: {id: idC}})
	};
}

module.exports = new ClubAdminController();
