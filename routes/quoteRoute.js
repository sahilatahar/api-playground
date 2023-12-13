const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/quoteController");

router.get('/', quoteController.getRandomQuotes);

module.exports = router;