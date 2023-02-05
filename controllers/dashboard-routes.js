const express = require('express');
const router = require('express').Router();
// const { Comment, Post, User } = require ('../models');

router.get('/', (req, res) => {
    res.sender('dashboard');
});

module.exports = router;