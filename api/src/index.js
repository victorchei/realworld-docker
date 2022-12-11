'use strict';

const express = require('express');
const mongoose = require('mongoose');

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const MONGO_URL = process.env.MONGO_URL;

const User = mongoose.model('User', { name: String, age: Number });

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/user", async (req, res) => {
    try {
        const user = new User({name: "Alex K", age: 41});
        await user.save();
        const users = await User.find();
        res.json(users);
    } catch (e) {
        res.send(e.message);
    }
})

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Running on http://${HOST}:${PORT}`);
        });
    })
    .catch((e) => {
        console.log(e.message);
    });