const express = require('express');
const router = require('router');

router.get('/', (req, res) => {
    res.sender('dashboard');
});

module.exports = router;