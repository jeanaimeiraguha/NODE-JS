const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node"
});

db.connect((err) => {
    if (err) {  
        console.error("Connection failed:", err);
        return;
    } 
    console.log("Connected");

    // Create a table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ex (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `;

    db.query(createTableQuery, (err, result) => {
        if (err) {
            console.error("Error creating table:", err);
        } else {
            console.log("Table created or already exists");
        }

        // Close the connection
        db.end((err) => {
            if (err) {
                console.error("Error closing connection:", err);
            } else {
                console.log("Connection closed");
            }
        });
    });
});

