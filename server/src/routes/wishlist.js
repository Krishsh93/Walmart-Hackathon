// Modules
const { Router } = require("express");
const { connectMongoClient } = require("../config/database");

// Routers and Variables
const wishlistRouter = Router();

// RESTful API's
wishlistRouter.get("/", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const products = await client
      .db("walmart")
      .collection("wishlist")
      .find({})
      .toArray();

    return res.json({ message: "Data fetched successfully", products });
  } catch (error) {
    throw new Error("Could not fetch products", error.message);
  } finally {
    client.close();
    console.log(`Database disconnected`);
  }
});

module.exports = wishlistRouter;
