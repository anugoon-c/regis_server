const express = require('express') // เรียกใช้ Express
var bodyParser = require('body-parser');
var multer = require('multer');
var passport = require('passport');
var cors = require("cors");

require('./configs/passport');

var upload = multer();

var authRouter = require('./routes/auth');
var personRouter = require('./routes/person');
var provinceRouter = require('./routes/province');
var educationRouter = require('./routes/education');
var occupationRouter = require('./routes/occupation');
var skillRouter = require('./routes/skill');
var religionRouter = require('./routes/religion');

const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array()); 
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/person', passport.authenticate('jwt', {session: false}), personRouter);
app.use('/api/province', passport.authenticate('jwt', {session: false}), provinceRouter);
// app.use('/api/person', personRouter);
// app.use('/api/province', provinceRouter);
app.use('/api/education', passport.authenticate('jwt', {session: false}), educationRouter);
app.use('/api/occupation', passport.authenticate('jwt', {session: false}), occupationRouter);
app.use('/api/skill', passport.authenticate('jwt', {session: false}), skillRouter);
app.use('/api/religion', passport.authenticate('jwt', {session: false}), religionRouter);

app.listen('3000',() => {
    console.log('start port 3000')  
})
