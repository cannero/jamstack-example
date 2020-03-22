const axios = require("axios");
const countries = require("./countries.json");
require("dotenv").config();

module.exports = async function () {
    const newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then(newsObj => {
        return [].concat.apply([], newsObj)
    });
};

async function getNews(country) {
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWSAPI_KEY}&pageSize=5`);
        return {
            "country": country,
            "articles": response.data.articles
        };
    } catch (error) {
        console.error(error);
    }

};