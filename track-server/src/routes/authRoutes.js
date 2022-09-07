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

module.exports = router;
