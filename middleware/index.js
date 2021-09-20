var express = require('express');
var auth = require('./auth')
var router = express.Router()
var verifikasi = require('./verifikasi')

//daftarkan menu regristasi
router.post('/api/v1/register', auth.resgistrasi)

//daftarkan menu login
router.post('/api/v1/login', auth.login)

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halaman_rahasia)

module.exports = router