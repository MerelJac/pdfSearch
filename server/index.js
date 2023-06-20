const express = require("express");
const multer = require("multer");

const app = express(); // how to handle HTTP and building the server
const upload = multer({dest: 'uploads/'}) // where uploaded files will be stored

app.post('/upload', upload.single('pdfFile'), (req, res) => {
    console.log("file uploaded")
    // logic to handle the uploaded file 
})

app.get('/file/:filename', (req, res) => {
    //logic to retrieve and send the requested file here 
})

const PORT = 2000; // post number of my choice
app.listen(PORT, () => {
    console.log("Server listening on port 2000")
})