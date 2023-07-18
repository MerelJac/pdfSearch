const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('./public'));

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/public/create.html')
})

app.get('/saved', (req, res) => {
    res.sendFile(__dirname + '/public/saved.html')
})

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})


