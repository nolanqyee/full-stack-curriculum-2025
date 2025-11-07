const express = require("express");
const app = express();

// import env variables
require("dotenv").config();

app.use(express.json());

// define middleware
const validateInput = (req, res, next) => {
    const { user, tweet } = req.body;
    if (!user || !tweet) {
        return res.status(400).json({ error: "Incomplete input" });
    } else {
        next();
    }
};

// fake database
const tweets = [
    { id: 1, user: "Ryan", tweet: "ChatGPT" },
    { id: 2, user: "Mohammed", tweet: "Hello World!" },
];

// get tweet by user
app.get("/api/tweets/:user", (req, res) => {
    let target = tweets.find((t) => t.user == req.params.user);
    if (target) {
        res.send(target);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// post a tweet
app.post("/api/tweets", validateInput, (req, res) => {
    let tweet = {
        id: tweets[tweets.length - 1].id + 1,
        user: req.body.user,
        tweet: req.body.tweet,
    };
    tweets.push(tweet);
    res.send(tweet);
});

// delete a tweet
app.delete("/api/tweets", (req, res) => {
    let tweetIndex = tweets.findIndex((tweet) => tweet.id == req.body.id);
    if (tweetIndex === -1) {
        res.status(404).send("Tweet not found");
    } else {
        // remove tweet
        let removed = tweets[tweetIndex];
        console.log(removed);
        tweets.splice(tweetIndex, 1);
        res.json(removed);
    }
});

const port = process.env.PORT || 3000; // default port to 3000

// start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

