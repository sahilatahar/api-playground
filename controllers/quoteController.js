const quoteService = require("../services/quote");

const getRandomQuotes = (req, res) => {
    if (!req.query.count) {
        const quote = quoteService.getRandomQuote()
        return res.json(quote);
    }

    const quotes = [];
    let count = 30;
    count = req.query.count;
    for (let i = 1; i <= count; i++) {
        const quote = quoteService.getRandomQuote();
        quotes.push(quote);
    }
    return res.json(quotes);
}

module.exports = {
    getRandomQuotes
}