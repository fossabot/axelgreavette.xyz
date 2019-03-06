require("dotenv").config()
const express = require('express')
const app = express()
const { join } = require("path")
const Legacy = express.Router()
const vhost = require("vhost")
const Render = require("./util/Render")

app.set('view engine', 'hbs');

Legacy.use("/", express.static(join(__dirname, "legacy")))

app.use(vhost("legacy.axelgreavette.xyz", Legacy))

app.use('/', express.static(join(__dirname, "front-end")))

app.get("/", function(req, res, next) {
    res.render(join(__dirname, "front-end"), Render)
})
app.get("/about-the-site", function(req, res, next) {
    res.render(join(__dirname, "front-end", "about-the-site"), Render)
})

app.get("*", function(req, res, next) {
    res.status(404).send("Roses are red,\n Voilets arn't blue,\n This is a 404 page, \n It's not to be viewed by you")
})

app.listen(process.env.PORT || 8081, console.log(`Site is up and running on ${process.env.PORT || 8081}`))
