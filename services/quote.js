const fs = require("fs");
const path = require("path");
const { randomInt } = require("../utils/getNumber");
const jsonFilePath = path.join(__dirname, "../data/quote.json");

const getRandomQuote = () => {
    try {
        const quotesData = fs.readFileSync(jsonFilePath);
        const quotes = JSON.parse(quotesData);
        const quote = quotes[randomInt(0, quotes.length)];
        return { quote: quote.text, author: quote.from };
    } catch (err) {
        console.error('Error reading quote file:', err);
        return { error: 'Failed to retrieve a quote' };
    }
}

module.exports = { getRandomQuote }