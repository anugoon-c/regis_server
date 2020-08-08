var express = require('express');
var router = express.Router();
var db = require('../connection/db');

/* Insert person */
router.post('/login', function(req, res, next) {
    try {
        console.log(req.body.username)
        console.log(req.body.password)
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;