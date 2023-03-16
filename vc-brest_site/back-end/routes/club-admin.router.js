const Router = require('express');
const router = new Router();

const clubAdminController = require('../controllers/club-admin.controller');

router.post('/club-administration', clubAdminController.createClubAdmin);
router.get('/club-administration', clubAdminController.getAllClubAdmin);
router.get('/club-administration/:id', clubAdminController.getClubAdmin);
router.put('/club-administration', clubAdminController.updateClubAdmin);
router.delete('/club-administration/:id', clubAdminController.deleteClubAdmin);

module.exports = router;
