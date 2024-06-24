// Modules
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

// Variables
const URI = process.env.URI;
const MONGO_URI = process.env.MONGO_URI;

// Functions
const connectMongoClient = async () => {
  try {
    // Connecting the MongoClient with mongoDB
    let client = await new MongoClient(URI).connect();
    console.log(`Connected to MongoDB`);

    return client;
  } catch (error) {
    throw new Error(
      "Unable to connect to MongoClient and MongoDB",
      error.message
    );
  }
};

const connectMongoose = () => {
  // Connecting to mongoose
  mongoose.connect(MONGO_URI);
  console.log(`Connected to Database`);
};

module.exports = { connectMongoClient, connectMongoose };
