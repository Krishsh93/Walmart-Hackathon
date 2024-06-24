// Modules
require("dotenv").config();
const express = require("express");
const { connectMongoose } = require("./src/config/database");
const cors = require("cors");

// Variables
const app = express();
const PORT = process.env.PORT || 8080;
const productRouter = require("./src/routes/products");
const wishlistRouter = require("./src/routes/wishlist");
const userRouter = require("./src/routes/users");

// Middlewares
app.use(express.json());
app.use(cors());

// RESTful API's
app.get("/", (req, res) => {
  res.status(200).send(`<h2>Welcome to the server</h2>`);
});

app.use("/products", productRouter);
app.use("/wishlist", wishlistRouter);
app.use("/user", userRouter);

// Turn the server UP
app.listen(PORT, () => {
  console.log(`Server is UP & Running at PORT ${PORT}`);
});
