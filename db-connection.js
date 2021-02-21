"use strict";
const mongoose = require("mongoose");

//Mongo Connection
const connectMongoDB = async () => {

    const options = {
        poolSize: 900,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    };

    try {
        await mongoose.connect('mongodb+srv://data:1234@cluster0.po4g2.mongodb.net/Bank-Data?retryWrites=true&w=majority', { useNewUrlParser: true });
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Could not connect to MongoDB", err);
    }
};

module.exports = connectMongoDB;
