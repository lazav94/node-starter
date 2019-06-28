// Configuration of express app
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config(); // This will put .env to process variables

const app = express();

// Setting up the application port
app.set("port", process.env.PORT || 8081);

app.use(express.static(path.join(__dirname, "public")));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use("/api", require("./services/swagger"));

// Database configuration
require("./services/dbconfig");

// Routes configuration
// require('./routes')(app);

app.listen(app.get("port"), () => {
  console.log("🖥  Server is 🏃  on port:", app.get("port"));
});

module.exports = app;
