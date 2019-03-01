module.exports = (express, app) => {

  app.use("/legacy", express.static("legacy"))  
}
