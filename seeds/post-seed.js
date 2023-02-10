const { Post } = require('../models');

const postData = [
    {
		"title": "Post One",
		"content": "This is the first post",
		"user_id": 1
	},
	{
		"title": "Post Two",
		"content": "This is the second post",
		"user_id": 2
	},
	{
		"title": "Post three",
		"content": "This is the third post.",
		"user_id": 1
	},
	{
		"title": "Post four",
		"content": "This is the fourth post.",
		"user_id": 3
	}
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;