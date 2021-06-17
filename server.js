//zmienne, stałe

var express = require("express")
var app = express()
const PORT = process.env.PORT || 3000
var longpoll = require("express-longpoll")(app, { DEBUG: true })
app.use(express.static('static'))
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));


longpoll.create("/poll");

//nasłuch na określonym porcie

app.post("/msg", (req, res) => {
    console.log(req.body)

    // res.send("działa")


    longpoll.publish("/poll", req.body)
    res.send("działa")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

