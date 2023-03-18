const Router = require('express');
const router = new Router();

const clubController = require('../controllers/club.controller');

router.post('/', clubController.createClub);
router.get('/', clubController.getClubAll);
router.get('/:id', clubController.getClubOne);
router.put('/', clubController.updateClub);
router.delete('/:id', clubController.deleteClub);

module.exports = router;
