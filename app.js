const express = require('express') // เรียกใช้ Express
const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน

var personRouter = require('./routes/person');
var educationRouter = require('./routes/education');
var talentRouter = require('./routes/talent');

app.use('/api/person', personRouter);
app.use('/api/education', educationRouter);
app.use('/api/talent', talentRouter);

app.listen('3000',() => {
    console.log('start port 3000')  
})
