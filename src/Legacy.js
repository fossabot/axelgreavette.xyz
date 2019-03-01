const subdomain = require("express-subdomain")
const { join } = require("path")

module.exports = (router, express, app) => {

  router.use("/", express.static(join(__dirname, "legacy")))
  
  app.use(subdomain("legacy", router))
  
}
