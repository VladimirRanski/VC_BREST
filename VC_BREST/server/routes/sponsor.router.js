const Router = require('express');
const router = new Router();
const {sponsorController} = require('../controllers');
const {checkRoleMiddleware} = require("../middleware");

router.post('/trainer', checkRoleMiddleware('Admin'), sponsorController.createSponsor);
router.get('/trainer', sponsorController.getAllSponsor);
router.get('/trainer/:id', sponsorController.getSponsor);
router.put('/trainer', checkRoleMiddleware('Admin'), sponsorController.updateSponsor);
router.delete('/trainer/:id', checkRoleMiddleware('Admin'), sponsorController.deleteSponsor);


module.exports = router;
