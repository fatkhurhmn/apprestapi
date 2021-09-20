var express = require('express');
var auth = require('./auth')
var router = express.Router()

//daftarkan menu regristasi
router.post('/api/v1/register', auth.resgistrasi)

module.exports = router