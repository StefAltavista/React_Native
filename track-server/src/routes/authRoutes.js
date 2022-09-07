const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

const router = express.Router();

const key = "My_Secret_Key";

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, key);
        res.send({ token });
    } catch (err) {
        return res.status(422).send(err.message);
    }
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(422)
            .send({ error: "must provide email and password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: "Invalid password or email" });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user.id }, key);
        res.send({ token });
    } catch (err) {
        return res.status(422).send({ error: "Invalid password or email" });
    }
});

module.exports = router;
