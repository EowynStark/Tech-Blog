const router = require('express').Router();
const authController = require('./authController');
const dashboardController = require('./dashboardController');
const homeController = require('./homeController');

router.use('/auth', authController);
router.use('/dashboard', dashboardController);
router.use('/', homeController);

module.exports = router;