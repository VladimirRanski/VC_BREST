const Router = require('express');
const router = new Router();
const {playerController} = require('../controllers');
const {checkRoleMiddleware} = require("../middleware");

router.post('/player', checkRoleMiddleware('Admin'), playerController.createPlayer);
router.get('/player', playerController.getAllPlayer);
router.get('/player/:id', playerController.getPlayer);
router.put('/player', checkRoleMiddleware('Admin'), playerController.updatePlayer);
router.delete('/player/:id', checkRoleMiddleware('Admin'), playerController.deletePlayer);


module.exports = router;
