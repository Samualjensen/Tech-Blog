const express = require('express');
const router = require('express').Router();
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then((posts) => {
    console.log(posts);
    res.render('home', { Post });
})
});

module.exports = router;