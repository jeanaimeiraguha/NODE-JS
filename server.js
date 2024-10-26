const express=require('express')

const mysql= require('mysql')

const cors=require('cors')
const bodyParser = require('body-parser')
const app=express()
//const PORT=process.env.PORT||300;
//app.use(cors);
///app.use(bodyParser.json)
app.listen(300, ()=>{
    console.log("My App is running on http://localhost:3000")
})
