// Modules
const { Router } = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

// Variables
const userRouter = Router();
const { connectMongoClient, connectMongoose } = require("../config/database");
const userModel = require("../models/users");
const { validateUser, validateLogin } = require("../config/validation");

// RESTful API's
userRouter.post("/login", validateLogin, async (req, res) => {
  let client, errors;
  try {
    // Validate login details
    errors = validationResult(req);
    if (!errors.isEmpty())
      return res.json({ message: "Invalid details", errors: errors.errors });

    // Getting the user credentials
    const { email, password } = req.body;

    // Connect to the MongoClient
    client = await connectMongoClient();

    // Checking if the user is registered
    const user = await client
      .db("walmart")
      .collection("users")
      .findOne({ email: email });

    // Sending the response if the user is not registered
    if (!user)
      return res.json({ message: "Please register first", loggedIn: false });

    // Logging in the user if the credentials match
    const result = await bcrypt.compare(password, user.password);

    if (!result)
      return res.json({ message: "Invalid credentials", loggedIn: false });

    return res.json({ message: "Login successful", loggedIn: true });
  } catch (error) {
    throw new Error("Could not find user", error.message);
  } finally {
    if (errors.isEmpty()) await client.close();
    console.log(`Database disconnected`);
  }
});

userRouter.post("/register", validateUser, async (req, res) => {
  try {
    // Checking if user details are valid
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.json({
        message: "User details are not valid",
        errors: errors.errors,
      });

    // Connecting the MongoDB database
    connectMongoose();

    // Getting the user credentials from the request body
    const { name, email, password } = req.body;

    // Checking if the user is already registered
    const user = await mongoose.connection
      .collection("users")
      .findOne({ email: email });
    if (user)
      return res.json({
        message: "You are a registered user",
        registration: false,
      });

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.json({
      message: "User registered",
      name,
      email,
      registration: true,
    });
  } catch (error) {
    throw new Error("Registration failed", error.message);
  } finally {
    mongoose.disconnect;
    console.log("Database disconnected");
  }
});

module.exports = userRouter;
