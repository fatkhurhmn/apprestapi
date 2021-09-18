var mysql = require('mysql');

//buat koneksi database

const koneksi = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_mahasiswa',
    port:3307
})



koneksi.connect((err)=>{
    if(err){
        console.log("Error", err);
        throw err;
    }
    console.log("Mysql terkoneksi");
});

module.exports = koneksi;
