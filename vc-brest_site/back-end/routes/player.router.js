const Router = require('express');
const router = new Router();

const playerController = require('../controllers/player.controller');

router.post('/player', playerController.createPlayer);
router.get('/player', playerController.getAllPlayer);
router.get('/player/:id', playerController.getPlayer);
router.put('/player', playerController.updatePlayer);
router.delete('/player/:id', playerController.deletePlayer);

module.exports = router;
