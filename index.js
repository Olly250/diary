const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys.js");
const app =express();


app.use(express.json());

mongoose.connect(keys.mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,

}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));

//setup port

const port = process.env.PORT || 5000;

app.listen(port,() => {

    console.log("server runnin on port $(port)");
})