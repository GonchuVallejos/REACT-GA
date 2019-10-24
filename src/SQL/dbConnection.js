var mysql = require ('mysql');
var express = require('express');
var app = express;


//Set up  connection to data base
var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.BD_USER,
    password:  process.env.BD_PASS,
    database: process.env.BD_TEST
});

//Connection to database
//connection.connect();


app.post('/users', function(req, res) {
    var user = req.body;
    var query = connection.query('INSERT INTO users SET = ?', user, function(err, result){

    });
    res.end('Success');
});

app.listen(3000, function(){
    console.log('example app listen on port 3000!')
});