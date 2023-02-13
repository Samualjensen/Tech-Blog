const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, async (req, res) => {
   try {
    if (req.session) {
        const commentData = await Comment.create({
            text: req.body.text,
            post_id: req.body.post_id,
            user_id: req.body.user_id,
        });
        res.json(commentData);
    };
   } catch(err) {
    console.log(err);
    res.status(400).json(err);
   };
});

module.exports = router;