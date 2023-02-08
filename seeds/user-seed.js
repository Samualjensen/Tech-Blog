const { User } = require('../models');

const userData = [
    {
		"username": "Hidalgo",
        "email": "hildalgo@gmail.com",
		"password": "password0000"
	},
	{
		"username": "Amanda",
        "email": "amanda@gmail.com",
		"password": "password1111"
	},
	{
		"username": "Milton",
        "email": "Milton@gmail.com",
		"password": "password2222"
	},
	{
		"username": "Milla",
        "email": "Milla@gmail.com",
		"password": "password3333"
	}
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;