const express = require('express') // เรียกใช้ Express
const mysql = require('mysql') // เรียกใช้ mysql
const db = mysql.createConnection({   // config ค่าการเชื่อมต่อฐานข้อมูล
host     : '192.168.64.2', 
user     : 'acdc',
password : '1234',
database : 'navdb'
})
db.connect() // เชื่อมต่อฐานข้อมูล
const app = express() // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน
// Select Data
app.get('/nava',(req,res)=> {   // Router เวลาเรียกใช้งาน
let sql = 'SELECT * FROM law'  // คำสั่ง sql
let query = db.query(sql,(err,results) => { // สั่ง Query คำสั่ง sql
if(err) throw err  // ดัก error
console.log(results) // แสดงผล บน Console 
res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
})
})
app.listen('3000',() => {     // 
console.log('Server running on port 3000')  
})