const vhost = require("vhost")

module.exports = (express, app) => {
  
  app.use(vhost("legacy.axelgreavette.xyz", express.static("legacy")))
  
}
