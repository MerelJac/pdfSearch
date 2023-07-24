const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
let db = require('./db/data.json')
const bodyParser = require('body-parser');
const fs = require('fs');
const mySQL = require('mysql');
const { connect } = require('http2');

// middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/create', (req, res) => {
    console.log(res.sendFile(__dirname + '/public/create.html'))
})

app.get('/saved', (req, res) => {
    res.sendFile(__dirname + '/public/saved.html')
})

app.get('/api/data', (req, res) => {
    
    res.status(200).json({message: `success`, data: db});

    console.log('api found')
})

app.post('/api/data', (req, res) => {
    console.info(`${req.method} request recieved to post data`);
    db.push(req.body);
    fs.writeFile('db/data.json', JSON.stringify(db), () => {
        res.status(200).json({message: "Note successfully posted", data: db});
      });
})

// read raw data.json file
let rawData = fs.readFileSync('db/data.json');
let data = JSON.parse(rawData)

// create connection with mySQL 
const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQLPASSWORD,
    database: 'files_db',
    // socketPath: '/tmp/mysql.sock'
}, console.log(`connnected to the files_db`))

// error handling
// connection.connect((err) => {
//     if (err) {
//         console.err(`error connection to mySQL: ${err}`)
//     }
//     console.log(`Connected to MySQL database`)
// })






app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})


