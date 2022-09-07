require("./models/Users");
const requireAuth = require("./middlewares/requireAuth");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

//connect to MongoDB
const mongoUri =
    "mongodb+srv://admin:tracktor@cluster0.xscogp5.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo");
});
mongoose.connection.on("error", (err) => {
    console.log("error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
    res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("listening 3000");
});
