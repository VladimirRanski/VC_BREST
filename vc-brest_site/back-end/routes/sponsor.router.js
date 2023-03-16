const Router = require('express');
const router = new Router();

const sponsorController = require('../controllers/sponsor.controller');

router.post('/trainer', sponsorController.createSponsor);
router.get('/trainer', sponsorController.getAllSponsor);
router.get('/trainer/:id', sponsorController.getSponsor);
router.put('/trainer', sponsorController.updateSponsor);
router.delete('/trainer/:id', sponsorController.deleteSponsor);

module.exports = router;
