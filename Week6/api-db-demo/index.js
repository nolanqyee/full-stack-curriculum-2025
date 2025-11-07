// backend code
const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./firebase"); // import the firestore database

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/api/tweets", async (req, res) => {
    const tweetsSnapshot = await db.collection("tweets").get();
    const tweets = tweetsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    res.json(tweets);
});

const validateInput = (req, res, next) => {
    const { user, tweet } = req.body;
    if (user && tweet) {
        next();
    } else {
        res.status(400).json({
            error: "Missing user or tweet in request body",
        });
    }
};

// GET a single tweet by document ID
app.get("/api/tweets/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const doc = await db.collection("tweets").doc(id).get();
        if (!doc.exists) {
            return res.status(404).json({ error: "Tweet not found" });
        }
        return res.json({ id: doc.id, ...doc.data() });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: "Server error", details: err.message });
    }
});

// GET tweets by username (avoid passing undefined into Firestore queries)
app.get("/api/tweets/user/:user", async (req, res) => {
    const { user } = req.params;
    if (!user) {
        return res.status(400).json({ error: "Missing user parameter" });
    }

    try {
        const tweetsSnapshot = await db
            .collection("tweets")
            .where("user", "==", user)
            .get();
        if (tweetsSnapshot.empty) {
            return res
                .status(404)
                .json({ error: "No tweets found for this user" });
        }
        const tweets = tweetsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return res.json(tweets);
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ error: "Server error", details: err.message });
    }
});

app.post("/api/tweets", validateInput, async (req, res) => {
    const newTweet = {
        user: req.body.user,
        tweet: req.body.tweet,
    };

    const tweetRef = await db.collection("tweets").add(newTweet);
    res.json({
        id: tweetRef.id,
        ...newTweet,
    });
});
