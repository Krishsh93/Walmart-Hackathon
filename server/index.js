// Modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Variables
const app = express();
const PORT = process.env.PORT || 8080;
const productRouter = require("./src/routes/products");
const wishlistRouter = require("./src/routes/wishlist");
const userRouter = require("./src/routes/users");
const bagRouter = require("./src/routes/bag");
const addressRouter = require("./src/routes/address");

// Middlewares
app.use(express.json());
app.use(cors());

// RESTful API's
app.get("/", (req, res) => {
  res.status(200).send(`<h2>Welcome to the server</h2>`);
});

app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/wishlist", wishlistRouter);
app.use("/bag", bagRouter);
app.use("/address", addressRouter);

// Turn the server UP
app.listen(PORT, () => {
  console.log(`Server is UP & Running at PORT ${PORT}`);
});
