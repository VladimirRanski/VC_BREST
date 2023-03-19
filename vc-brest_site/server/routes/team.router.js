const Router = require('express');
const router = new Router();
const {teamController} = require('../controllers');

router.post('/team', teamController.createTeam);
router.get('/team', teamController.getAllTeam);
router.get('/team/:id', teamController.getTeam);
router.put('/team', teamController.updateTeam);
router.delete('/team/:id', teamController.deleteTeam);


module.exports = router;
