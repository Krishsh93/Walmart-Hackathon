// Modules
const express = require("express");
const { connectMongoose } = require("./src/config/database");
const productRouter = require("./src/routes/products");
const wishlistRouter = require("./src/routes/wishlist");
require("dotenv").config();

// Variables
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// RESTful API's
app.get("/", (req, res) => {
  res.status(200).send(`<h2>Welcome to the server</h2>`);
});

app.use("/products", productRouter);
app.use("/wishlist", wishlistRouter);

// Turn the server UP
app.listen(PORT, () => {
  console.log(`Server is UP & Running at PORT ${PORT}`);
});
