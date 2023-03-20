const Router = require('express');
const router = new Router();
const {teamController} = require('../controllers');
const {checkRoleMiddleware} = require("../middleware");

router.post('/team', checkRoleMiddleware('Admin'), teamController.createTeam);
router.get('/team', teamController.getAllTeam);
router.get('/team/:id', teamController.getTeam);
router.put('/team', checkRoleMiddleware('Admin'), teamController.updateTeam);
router.delete('/team/:id', checkRoleMiddleware('Admin'), teamController.deleteTeam);


module.exports = router;
