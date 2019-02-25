require("dotenv").config()
const subdomain = require("express-subdomain")
const express = require('express')
const app = express()
const { join } = require("path")

const Legacy = express.Router()

app.use('/', express.static(join(__dirname, "front-end")))

Legacy.use("/", express.static(join(__dirname, "legacy")))

app.use(subdomain("legacy", Legacy))
app.listen(process.env.PORT || 8081, console.log(`Site is up and running on ${process.env.PORT || 8081}`))