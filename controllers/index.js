const router = require('express').Router();

const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);
router.use('/', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;