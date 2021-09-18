'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API", res);
};

// menampilkan semua data 
exports.getdata_user = function (req, res) {
    connection.query("SELECT * FROM pengguna", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        };
    });
};

//berdasar id
exports.getdata_id = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM pengguna WHERE id_user = ?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        };
    });
}

//menambahkan data pengguna
exports.addData_user = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var membership = req.body.membership;
    var status = req.body.status;
    var role = req.body.role;

    connection.query("INSERT INTO pengguna (name, email, password, membership, status, role) VALUES(?,?,?,?,?,?)", [name, email, password, membership, status, role], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menambahkan data", res);
        }
    })
}

//ubah data berdasar id
exports.putData_user = function (req, res) {
    var id = req.body.id_user;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var membership = req.body.membership;
    var status = req.body.status;
    var role = req.body.role;

    var query = "UPDATE pengguna SET name=?, email=?, password=?, membership=?, status=?, role=? WHERE id_user = ?";
    connection.query(query, [name, email, password, membership, status, role, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil mengubah data", res);
        }
    })
}

//hapus data pengguna
//berdasar id
exports.delete_user = function (req, res) {
    let id = req.body.id_user;
    connection.query("DELETE FROM pengguna WHERE id_user=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menghapus data", res);
        };
    });
}