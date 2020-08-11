const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const moment = require('moment');
const bcrypt = require('bcrypt');
const db = require('../configs/db');

const SECRET = 'ACDCBattlionRegisteration';

/* Login user */
router.post('/login', async function ( req, res, next ) {
  // Find username in DB and get password to compare
  let sql = ` SELECT * from user_dev WHERE USERNAME = '${req.body.USERNAME}';`;
  let query = db.query(sql,(err,results) => {
    if(err) {
        res.status(400).send('ไม่พบผู้ใช้งานในระบบ');
        throw err
    }
    if(bcrypt.compare(req.body.PASSWORD, results[0].PASSWORD)) {
      const payload = {
        sub: results[0].USERNAME,
        iat: moment().valueOf(),
        batt: results[0].BATT, // กองพัน
        company: results[0].COMPANY, // กองร้อย
        yearin: results[0].YEARIN, // ผลัดปี
      };
      res.status(200).send(jwt.sign(payload, SECRET, { expiresIn: '12h' }));
    } else {
      res.status(401).send('ไม่สามารถเข้าสู่ระบบได้');
    }
  })
})

/* Register user */
router.post('/register', ( req, res, next ) => {
  let hash = bcrypt.hashSync(req.body.PASSWORD, 10);
  let sql = 
  ` INSERT INTO user_dev (USERNAME, PASSWORD, BATT, COMPANY, YEARIN)
    VALUES ('${req.body.USERNAME}', '${hash}', '${req.body.BATT}', '${req.body.COMPANY}', '${req.body.YEARIN}');`
  let query = db.query(sql,(err,results) => {
    if(err) {
        res.status(400).send('ไม่สามารถเพิ่มผู้ใช้งานได้');
        throw err
    }  
    res.send(`เพิ่มผู้ใช้ ${req.body.USERNAME} เรียบร้อยแล้ว !`);
  })
})

module.exports = router;