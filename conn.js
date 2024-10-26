const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node"
});

db.connect((err) => {
    if (err) {  
        console.log("Connection failed:", err);
    } else {
        console.log("Connected");
    }
});
