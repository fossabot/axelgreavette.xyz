require("dotenv").config()
const express = require('express')
const app = express()
const { join } = require("path")
const Legacy = express.Router()
const vhost = require("vhost")

Legacy.use("/l", express.static(join(__dirname, "legacy")))

app.use(vhost("legacy.axelgreavette.xyz", Legacy))

app.use('/', express.static(join(__dirname, "front-end")))

app.listen(process.env.PORT || 8081, console.log(`Site is up and running on ${process.env.PORT || 8081}`))
