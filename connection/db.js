var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.0.181', 
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