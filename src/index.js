require("dotenv").config()
const express = require('express')
const app = express()
const { join } = require("path")

require("./Legacy.js")(express, app)

app.use('/', express.static(join(__dirname, "front-end")))

app.listen(process.env.PORT || 8081, console.log(`Site is up and running on ${process.env.PORT || 8081}`))
