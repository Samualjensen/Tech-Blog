const { Post } = require('../models');

const postData = [
    {
		"title": "Post One",
		"post_content": "This is the first post",
		"user_id": 1
	},
	{
		"title": "Post Two",
		"post_content": "This is the second post",
		"user_id": 4
	},
	{
		"title": "Post three",
		"post_content": "This is the third post.",
		"user_id": 1
	},
	{
		"title": "Post four",
		"post_content": "This is the fourth post.",
		"user_id": 3
	}
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;