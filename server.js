const express=require('express')

const mysql= require('mysql')

const cors=require('cors')
const bodyParser = require('body-parser')
const app=express()
//const PORT=process.env.PORT||300;
//app.use(cors);
///app.use(bodyParser.json)

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId, name, email });
    });
});
app.listen(300, ()=>{
    console.log("My App is running on http://localhost:3000")
})
