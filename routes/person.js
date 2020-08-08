var express = require('express');
var router = express.Router();
var db = require('../connection/db');

/* Select person depend on NAVYID */
router.get('/:id', function(req, res, next) {
    try {
        console.log(req.params.id)
        let sql = `SELECT * FROM person_copy WHERE NAVYID = ${req.params.id}`
        let query = db.query(sql,(err,results) => {
            console.log(`SELECT NAVYID : ${req.params.id}`)
            res.json(results)
        })
    } catch (err) {
        res.send('respond with a resource');
    }
});

/* Insert person */
router.get('/create', function(req, res, next) {
    try {
        console.log(req.params.id)
        let sql = 
        `INSERT INTO pserson_copy (STATUSCODE,)
        VALUES ('', '', '', '', '', '');`
        let query = db.query(sql,(err,results) => {
            console.log(`SELECT NAVYID : ${req.params.id}`)
            res.json(results)
        })
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;