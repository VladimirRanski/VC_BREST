const Router = require('express');
const router = new Router();
const {clubAdminController} = require('../controllers');

router.post('/', clubAdminController.createClubAdmin);
router.get('/', clubAdminController.getAllClubAdmin);
router.get('/:id', clubAdminController.getClubAdmin);
router.put('/', clubAdminController.updateClubAdmin);
router.delete('/:id', clubAdminController.deleteClubAdmin);


module.exports = router;
