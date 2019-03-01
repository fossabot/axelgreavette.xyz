const vhost = require("vhost")
const { join } = require("path")

module.exports = (express, app) => {

  app.use(vhost("legacy.axelgreavette.xyz", express.static(join(__dirname, "legacy"))))
  
}
