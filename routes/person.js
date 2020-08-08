var express = require('express');
var router = express.Router();
var db = require('../connection/db');
var authenticate = require("../middleware/authentication");

/* Select person depend on NAVYID */
router.get('/:id', authenticate, function(req, res, next) {
    try {
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
router.post('/create', function(req, res, next) {
    try {
        console.log(req.body)
        res.sendStatus(200)
    } catch (err) {
        res.send('respond with a resource');
    }
});

/* Update person */
router.put('/update/:id', function(req, res, next) {
    try {
        console.log(`UPDATE NAVYID : ${req.params.id}`)
        res.sendStatus(200)
    } catch (err) {
        res.send('respond with a resource');
    }
});

/* Delete person */
router.delete('/delete/:id', function(req, res, next) {
    try {
        console.log(`DELETE NAVYID : ${req.params.id}`)
        res.sendStatus(200)
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;