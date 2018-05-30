//Requiert et instancie le module 'mysql' de NodeJS
var mysql = require('mysql');

var connection = mysql.createPool({
    host:'localhost',
    user:'user_mina',
    password: 'admin',
    database: 'todolight'
});

//Exporter la méthode connection
module.exports = connection;