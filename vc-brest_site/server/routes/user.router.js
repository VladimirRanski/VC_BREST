const Router = require('express');
const router = new Router();
const {userController} = require('../controllers');
const {authMiddleware} = require('../middleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.checked);


module.exports = router;
