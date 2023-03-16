const Router = require('express');
const router = new Router();
const trainerController = require('../controllers/trainer.controller');


router.post('/trainer', trainerController.createTrainer);
router.get('/trainer', trainerController.getAllTrainer);
router.get('/trainer/:id', trainerController.getTrainer);
router.put('/trainer', trainerController.updateTrainer);
router.delete('/trainer/:id', trainerController.deleteTrainer);

module.exports = router;
