const express = require('express') // เรียกใช้ Express
var bodyParser = require('body-parser');
var multer = require('multer');
// Import passport
require('./configs/passport');
var upload = multer();
var passport = require('passport');

var authRouter = require('./routes/auth');
var personRouter = require('./routes/person');

const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/person', passport.authenticate('jwt', {session: false}), personRouter);

app.listen('3000',() => {
    console.log('start port 3000')  
})
