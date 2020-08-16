var express = require('express');
var router = express.Router();
var db = require('../configs/db');

router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM skilltab`
    let query = db.query(sql, (err, results) => {
        if (err) {
            res.status(400).send('ไม่สามารถค้นหาข้อมูล');
            throw err
        }
        results.length === 0 ? res.status(400).send('ไม่พบข้อมูลทหารในระบบ') : res.json(results);
    })
});

module.exports = router;