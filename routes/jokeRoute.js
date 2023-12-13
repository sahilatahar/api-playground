const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.get('/', jokeController.getRandomJokes);

module.exports = router;