// Modules
const mongoose = require("mongoose");

// Schema
const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Model
const userModel = mongoose.model("users", usersSchema);

module.exports = userModel;
