const Router = require('express');
const router = new Router();

const clubController = require('../controllers/club.controller');

router.post('/club', clubController.createClub);
router.get('/club', clubController.getAllClub);
router.get('/club/:id', clubController.getClub);
router.put('/club', clubController.updateClub);
router.delete('/club/:id', clubController.deleteClub);

module.exports = router;
