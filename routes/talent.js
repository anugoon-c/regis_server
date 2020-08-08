var express = require('express');
var router = express.Router();
var db = require('../connection/db');

/* Register Function */
router.get('/register', function(req, res, next) {
    try {
        let sql = 'SELECT * FROM law'  // คำสั่ง sql
        let query = db.query(sql,(err,results) => { // สั่ง Query คำสั่ง sql
            if(err) throw err  // ดัก error
            console.log('SELECT ALL RECORD') // แสดงผล บน Console 
            res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
        })
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;