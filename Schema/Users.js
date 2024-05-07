const connect = require('../connections/mysql');

const usersSchema = 'CREATE TABLE IF NOT EXISTS `accounts` ( `id` int(11) NOT NULL AUTO_INCREMENT, `username` varchar(50) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(100) NOT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8';

connect(usersSchema)