const Router = require('express');
const router = new Router();

const clubRouter = require('./club.router');
const clubAdminRouter = require('./club-admin.router');
const teamRouter = require('./team.router');
const playerRouter = require('./player.router');
const trainerRouter = require('./trainer.router');
const sponsorRouter = require('./sponsor.router');
const userRouter = require('./user.router');

router.use('/club', clubRouter);
router.use('/club-administration', clubAdminRouter);
router.use('/team', teamRouter);
router.use('/player', playerRouter);
router.use('/trainer', trainerRouter);
router.use('/sponsor', sponsorRouter);
router.use('/user', userRouter);

module.exports = router;
