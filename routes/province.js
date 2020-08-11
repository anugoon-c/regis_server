var express = require('express');
var router = express.Router();
var db = require('../configs/db');

router.get('/:name', function(req, res, next) {
    try {
        let sql = `SELECT * FROM armtown WHERE ARMNAME = '${req.params.name}'`
        let query = db.query(sql,(err,results) => {
            res.json(results[0])
        })
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;