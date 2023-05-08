"use strict";
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'coolcolla-db.c2n5m5gadxap.ap-northeast-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'admin1234',
  database : 'management'
});
 
connection.connect();
 
connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('users: ', results);
});
 
connection.end();

const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/sign', function(req, res){
    res.sendfile(__dirname + '/sign-up.html');
})

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html')
})
