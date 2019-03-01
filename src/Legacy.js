const vhost = require("vhost")
const { join } = require("path")
let router

module.exports = (express, app) => {
  router = express.router()
  
  router.get("/", (req, res, next) => { res.send("huh wierd eh?") })
  //express.static(join(__dirname, "legacy"))
  app.use(vhost("legacy.axelgreavette.xyz", router))
  
}
