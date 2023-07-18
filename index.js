const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('./public'));

app.get('/get-signature', (req,res) => {
    const timestamp = Math.round(new Date().getTime() /1000);
    const signature = cloudinary.utils.api_sign_request({
        timestamp: timestamp
    },
    cloudinaryConfig.api_secret)
    res.json({ timestamp, signature})
})

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/public/create.html')
})

app.get('/saved', (req, res) => {
    res.sendFile(__dirname + '/public/saved.html')
})

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})


