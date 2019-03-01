require("dotenv").config()
const express = require('express')
const app = express()

app.use('/', express.static("front-end"))

require("./Legacy.js")(express, app)

app.listen(process.env.PORT || 8081, console.log(`Site is up and running on ${process.env.PORT || 8081}`))
