// Modules
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

// Variables
const URI = process.env.URI;

// Functions
const connectMongoClient = async () => {
  let client;
  try {
    // Connecting the MongoClient with mongoDB
    client = await new MongoClient(URI).connect();
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
  mongoose.connect(URI);
  console.log(`Connected to Database`);
};

module.exports = { connectMongoClient, connectMongoose };
