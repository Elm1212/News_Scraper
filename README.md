# News_Scraper
This is a full stack application that uses Cheerio to scrape news sites.

This application uses the Cheerio NPM package to scrape artictle from NPR.org.  When you click on the "Scrape Articles" button, you will get freshly scraped articles.  You can then add a comment to the article which will be saved via Mongoose or delete the comment which will remove it from the database.

The scraped news article contains:

- Headline - title of the article
- Summary - a short summary of the article
- URL - the url to the original article

![Image description](link-to-image) --->  Need to push image into Github

Technologies Used:

- Mongoose (MongoDB)
- Handlebars
- Express
- Cheerio
- Axios

Deployed at https://newscrapers.herokuapp.com/
