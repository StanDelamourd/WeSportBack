const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/login', (req, res) => {

});

router.post('/signup', (req, res) => {

});
router.post('/login', (req, res) => {
    email: req.email,
    password: req.password,

});

module.exports = router