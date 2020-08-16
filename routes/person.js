var express = require('express');
var router = express.Router();
var db = require('../configs/db');
var jwtDecode = require('jwt-decode');

router.get('/', function (req, res, next) {
    let payload = jwtDecode(req.headers.authorization.slice(7))
    let sql = `SELECT * FROM person_dev WHERE YEARIN = '${payload.yearin}' AND BATT = '${payload.batt}' AND COMPANY = '${payload.company}'`
    let query = db.query(sql, (err, results) => {
        if (err) {
            res.status(400).send('ไม่สามารถค้นหาข้อมูล');
            throw err
        }
        results.length === 0 ? res.status(400).send('ไม่พบข้อมูลทหารในระบบ') : res.json(results);
    })
});

/* Select person depend on NAVYID */
router.get('/:id', function (req, res, next) {
    console.log(`SELECT NAVYID: ${req.params.id}`);
    let sql =   `SELECT * 
                FROM person_dev
                INNER JOIN armtown
                ON person_dev.ARMID = armtown.ARMID
                INNER JOIN townname
                ON person_dev.TOWNCODE = townname.TOWNCODE
                INNER JOIN religion
                ON person_dev.REGCODE = religion.REGCODE
                INNER JOIN eductab
                ON person_dev.EDUCODE1 = eductab.ECODE1 AND  person_dev.EDUCODE2 = eductab.ECODE2 
                INNER JOIN occtab
                ON person_dev.OCCCODE = occtab.OCCCODE
                INNER JOIN skilltab
                ON person_dev.SKILLCODE = skilltab.SKILLCODE
                WHERE NAVYID = ${req.params.id}`
    let query = db.query(sql,(err,results) => {
        if(err) {
            res.status(400).send('ไม่สามารถค้นหาข้อมูล');
            throw err
        }
        results.length === 0 ? res.status(400).send('ไม่พบข้อมูลทหารในระบบ') : res.json(results);
    })
});

/* Insert person */
router.post('/create', async function(req, res, next) {
    let sql = 
        `   INSERT INTO person_dev 
            (   BATT, 
                COMPANY, 
                PLATOON,
                PSEQ, 
                YEARIN, 
                NAME, 
                SNAME, 
                BIRTHDATE, 
                ID8, 
                ID13, 
                ADDRESS, 
                ADDRESS_MU, 
                ADDRESS_SOIL, 
                ADDRESS_ROAD, 
                FATHER, 
                FSNAME, 
                MOTHER, 
                MSNAME, 
                HEIGHT, 
                WIDTH
            )
            VALUES (
                '${req.body.BATT}', 
                '${req.body.COMPANY}', 
                '${req.body.PLATOON}', 
                '${req.body.PSEQ}',
                '${req.body.YEARIN}', 
                '${req.body.NAME}', 
                '${req.body.SNAME}', 
                '${req.body.BIRTHDATE}', 
                '${req.body.ID8}', 
                '${req.body.ID13}', 
                '${req.body.ADDRESS}', 
                '${req.body.ADDRESS_MU}', 
                '${req.body.ADDRESS_SOIL}', 
                '${req.body.ADDRESS_ROAD}', 
                '${req.body.FATHER}', 
                '${req.body.FSNAME}', 
                '${req.body.MOTHER}', 
                '${req.body.MSNAME}', 
                '${req.body.HEIGHT}', 
                '${req.body.WIDTH}'
            );`
    let query = db.query(sql,(err,results) => {
        if(err) {
            res.status(400).send('ไม่สามารถเพิ่มข้อมูลทหารได้');
            throw err
        }  
        res.send('เพิ่มข้อมูลทหารสำเร็จ');
    })
});

/* Update person */
router.put('/:id', function(req, res, next) {
    try {
        console.log(`UPDATE NAVYID : ${req.params.id}`)
        res.sendStatus(200)
    } catch (err) {
        res.send('respond with a resource');
    }
});

/* Delete person */
router.delete('/:id', function(req, res, next) {
    let sql = `DELETE FROM person_dev WHERE NAVYID = ${req.params.id}`
    let query = db.query(sql,(err,results) => {
        if(err) {
            res.status(400).send('ไม่สามารถลบข้อมูลได้');
            throw err
        }
        results.affectedRows === 0 ? res.status(400).send('ไม่พบข้อมูลทหารในระบบ') : res.send(`ลบข้อมูล NAVYID: ${req.params.id} เรียบร้อย`);
    })
});

module.exports = router;