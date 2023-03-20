const Router = require('express');
const router = new Router();
const {clubAdminController} = require('../controllers');
const {checkRoleMiddleware} = require("../middleware");

router.post('/', checkRoleMiddleware('Admin'), clubAdminController.createClubAdmin);
router.get('/', clubAdminController.getAllClubAdmin);
router.get('/:id', clubAdminController.getClubAdmin);
router.put('/', checkRoleMiddleware('Admin'), clubAdminController.updateClubAdmin);
router.delete('/:id', checkRoleMiddleware('Admin'), clubAdminController.deleteClubAdmin);


module.exports = router;
