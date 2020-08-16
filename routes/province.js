var express = require('express');
var router = express.Router();
var db = require('../configs/db');

router.get('/:name', async function(req, res, next) {
    try {
        let sql = `SELECT * FROM armtown WHERE ARMNAME = '${req.params.name}'`
        const rows = await db.query(sql);
        let query = db.query(sql,(err,results) => {
            res.json(results[0])
        })
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;