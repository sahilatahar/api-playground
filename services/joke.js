const fs = require('fs');
const path = require('path');
const { randomInt } = require('../utils/getNumber');

const jokesFilePath = path.join(__dirname, '../data/jokes.json');

const getRandomJoke = () => {
    try {
        const jokesData = fs.readFileSync(jokesFilePath, 'utf8');
        const jokes = JSON.parse(jokesData);
        const randomJoke = jokes[randomInt(0, jokes.length)].body;
        return { joke: randomJoke };
    } catch (err) {
        console.error('Error reading jokes file:', err);
        return { error: 'Failed to retrieve a joke' };
    }
};

module.exports = { getRandomJoke };
