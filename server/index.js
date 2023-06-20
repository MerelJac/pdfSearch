const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

const uploads = multer({dest: __dirname + "/uploads"}) // where files will be saved

// below will call the path and the callback function
app.post("/uploads", uploads.array("file"), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.json({status: "files received"})

})

app.listen(5500, function () {
    console.log("Server is running on localhost5500");
});