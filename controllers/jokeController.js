const jokeService = require("../services/joke");

const getRandomJokes = async (req, res) => {

    if (!req.query.count) {
        const joke = jokeService.getRandomJoke();
        return res.json(joke);
    }

    const jokes = [];
    let count = 10;
    count = req.query.count;

    for (let i = 1; i <= count; i++) {
        const joke = jokeService.getRandomJoke();
        jokes.push(joke);
    }

    return res.json(jokes);
}

module.exports = { getRandomJokes }