'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan", res);
};

// menampilkan semua data 
exports.getdata_user = function(req, res){
    connection.query('SELECT * FROM pengguna', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        };
    });
}