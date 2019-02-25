const express = require("express");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000;

 // initialize express
const app = express();

 // ** middleware **

 // parsing request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

 // set up handlebars as views
const exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 // make public a static folder
app.use(express.static("public"));

 // import routes and give server access. 
const routes = require("./controllers/webScrapeControl.js")

 app.use(routes);

 // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

 mongoose.connect(MONGODB_URI);
// start server 
app.listen(PORT, () => console.log(`Server up and listening on ${PORT}`)) 