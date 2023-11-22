const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createConnection({
    user: "root",
    host: 'localhost',
    password: "your_password",
    database: "mydatabase"
});

app.use(cors());
app.use(express.json());

app.post('/create', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;
    const country = req.body.country;

    db.query('INSERT INTO employee (name, age, country, address) VALUES (?,?,?,?)', [name, age, country, address], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json({ message: 'Values Inserted' });
        }
    });
});

app.get('/showEmployees', (req, res) => {
    db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json({ employees: result });
        }
    });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Hey, this is your server on port ${PORT}`);
});
