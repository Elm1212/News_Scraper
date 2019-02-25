const express = require("express");
const router = express.Router();

 // scraper modules
const axios = require("axios");
const cheerio = require("cheerio");

 // Require all models
// var db = require("../models");

 router.get("/", (req, res) => {
     // grab the html body via axios
    axios.get("https://www.npr.org").then((response) => {
        // load the response into cheerio and save it to $
        const $ = cheerio.load(response.data);
        $("article").each((i, element) => {
            let result = {};
            result.title = $(element).find("h3").text();
            result.summary = $(element).find("p").text();
            result.link = `https://www.npr.org${$(element).find("a").attr("href")}`;
            console.log(result);
        });

         res.send("scrape complete")
    })

});

 module.exports = router; 