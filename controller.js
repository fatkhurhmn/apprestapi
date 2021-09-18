'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API", res);
};

// menampilkan semua data 
exports.get_mhs = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        };
    });
};

//berdasar id
exports.get_mhs_id = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mhs = ?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        };
    });
}

//menambahkan data mahasiswa
exports.add_mhs = function (req, res) {
    var nama = req.body.nama;
    var nim = req.body.nim;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nama, nim, jurusan) VALUES(?,?,?)", [nama, nim, jurusan], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menambahkan data", res);
        }
    })
}

//ubah data berdasar id
exports.put_mhs = function (req, res) {
    var id = req.body.id_mhs;
    var nama = req.body.nama;
    var nim = req.body.nim;
    var jurusan = req.body.jurusan;

    var query = "UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id_mhs=?";
    connection.query(query, [nama, nim, jurusan, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil mengubah data", res);
        }
    })
}

//hapus data mahasiswa
exports.delete_mhs = function (req, res) {
    let id = req.body.id_mhs;
    connection.query("DELETE FROM mahasiswa WHERE id_mhs=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil menghapus data", res);
        };
    });
}

//menampilkan matakuliah group
exports.get_matakuliah = function(req, res){
    var q = `SELECT mahasiswa.id_mhs, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks
    FROM krs
    JOIN mahasiswa
    JOIN matakuliah
    WHERE krs.id_mhs = mahasiswa.id_mhs
    AND krs.id_matakuliah = matakuliah.id_matakuliah
    ORDER BY mahasiswa.id_mhs`;

    connection.query(q, function(error, rows, fiels){
        if(error){
            console.log(error)
        }else{
            response.oknested(rows, res);
        }
    })
}