require("dotenv").config()
const express = require('express')
const app = express()
const { join } = require("path")
const subdomain = require("express-subdomain")

const LegacyAbout = express.Router()

app.use('/', express.static(join(__dirname, "front-end")))

LegacyAbout.use("/", express.static(join(__dirname, "about") ))

app.use(subdomain("legacy", LegacyAbout))
app.listen(process.env.PORT || 8081, console.log(`Site is up and running on ${process.env.PORT || 8081}`))