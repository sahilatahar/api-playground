const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const quoteRoute = require("./routes/quoteRoute");
const jokeRoute = require("./routes/jokeRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/user', userRoute);
app.use("/quote", quoteRoute);
app.use("/joke", jokeRoute);

app.use('*', (req, res) => {
    return res.json({ "message": "See how to use it, visit: https://github.com/sahilatahar/api-playground/" })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})