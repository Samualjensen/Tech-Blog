const { Comment } = require('../models');

const commentData = [
	{
		"text": "I am user 4 commenting on post 1",
		"post_id": 1,
		"user_id": 4
	},
	{
		"text": "I am user 2 commenting on post 4",
		"post_id": 4,
		"user_id": 2
	},
	{
		"text": "I am user 1 commenting on post 2",
		"post_id": 2,
		"user_id": 1
	},
	{
		"text": "I am user 3 commenting on post 2",
		"post_id": 2,
		"user_id": 3
	}
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;