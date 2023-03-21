const Router = require('express');
const router = new Router();
const {clubController} = require('../controllers');
const {checkRoleMiddleware} = require('../middleware')

router.post('/', checkRoleMiddleware('Admin'), clubController.createClub);
router.get('/', clubController.getClubAll);
router.get('/:id', clubController.getClubOne);
router.put('/', checkRoleMiddleware('Admin'), clubController.updateClub);
router.delete('/:id', checkRoleMiddleware('Admin'), clubController.deleteClub);


module.exports = router;
