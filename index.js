const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
let db = require('./db/data.json')
const bodyParser = require('body-parser');
const fs = require('fs');

// middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/public/create.html')
})

app.get('/saved', (req, res) => {
    res.sendFile(__dirname + '/public/saved.html')
})

app.post('/api/data', (req, res) => {
    console.info(`${req.method} request recieved to post data`);
    db.push(req.body);
    fs.writeFile('db/data.json', JSON.stringify(db), () => {
        res.status(200).json({message: "Note successfully posted", data: db});
      });
})

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})


