const Router = require('express');
const router = new Router();
const {trainerController} = require('../controllers');
const {checkRoleMiddleware} = require("../middleware");

router.post('/trainer', checkRoleMiddleware('Admin'), trainerController.createTrainer);
router.get('/trainer', trainerController.getAllTrainer);
router.get('/trainer/:id', trainerController.getTrainer);
router.put('/trainer', checkRoleMiddleware('Admin'), trainerController.updateTrainer);
router.delete('/trainer/:id', checkRoleMiddleware('Admin'), trainerController.deleteTrainer);


module.exports = router;
