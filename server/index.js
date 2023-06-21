const express = require("express"); // how to build a server
const multer = require("multer");
const path= require("path") // 
const app = express(); // how to handle HTTP and building the server

app.use(express.json()) // tell express we will be speaking in jsno
app.use(express.urlencoded({extended: true})) // middleware software to handle form data from URLs as objects and arrays. extended - making it easier to post. 
app.use(express.static("../public")) // tells express what folder to find the static files in (don't look in the server folder)

app.get("/", (req, res) => {
console.log("HIT ME BABY ONE MORE TIME")
res.sendFile(path.join(__dirname, "../public/index.html")) // whatever path it's coming back from, respond to the front end with this directory's public/index file. 
})

// basically make our own API that the server calls and the script files is fetching 
app.get("/taco", (req, res) => {
    res.json(["bingo", "bongo", "bango"])
})

const PORT = process.env.PORT ||  8080; // port is herolu's or development server. 
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})