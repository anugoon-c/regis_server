var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost', 
    user     : 'acdc',
    password : '1234',
    database : 'navdb'
});

connection.connect(function(err) {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
        console.log('Connection established');
});

module.exports = connection;