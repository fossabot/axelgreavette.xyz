const subdomain = require("express-subdomain")
const { path } = require("path")

module.exports = (router, express, app) => {

  router.use("/", express.static(path(__dirname, "legacy")))
  
  app.use(subdomain("legacy", router))
  
}
