const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/front-end'))

app.listen(process.env.PORT || 8081, console.log("Site is up and running on 8081")) 