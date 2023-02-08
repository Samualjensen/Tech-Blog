const router = require('express').Router();

const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./api/dashboard-routes');

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;