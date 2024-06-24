// Modules
const { Router } = require("express");
const mongoose = require("mongoose");
const url = require("url");

// Routers and Variables
const { connectMongoClient } = require("../config/database");
const wishlistRouter = Router();

// RESTful API's
wishlistRouter.get("/", async (req, res) => {
  let client;
  try {
    // Connecting to the mongoDB database
    client = await connectMongoClient();

    // Parsing the URL and accumulating relevant query parameters
    const parsedURL = url.parse(req.url, true);
    const query = parsedURL.query;
    const { email } = query;

    const products = await client
      .db("walmart")
      .collection("wishlist")
      .find({ email: email })
      .toArray();

    return res.json({
      message: "Data fetched successfully",
      products,
      totalCount: products.length,
    });
  } catch (error) {
    throw new Error("Could not fetch products", error.message);
  } finally {
    client.close();
    console.log(`Database disconnected`);
  }
});

wishlistRouter.get("/:id", async (req, res) => {
  let client;
  try {
    const { id } = req.params;

    client = await connectMongoClient();
    const product = await client
      .db("walmart")
      .collection("wishlist")
      .find({ id: parseInt(id) })
      .toArray();

    return res.json({ message: product });
  } catch (error) {
    throw new Error("Could not fetch wishlist data", error.message);
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

wishlistRouter.post("/add", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const product = await client
      .db("walmart")
      .collection("wishlist")
      .insertOne({ ...req.body });

    return res.json({ message: product });
  } catch (error) {
    throw new Error("Unable to add item to wishlist", error.message);
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

wishlistRouter.delete("/delete/item/:id", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();

    const { id } = req.params;
    if (id) {
      const acknowledgement = await client
        .db("walmart")
        .collection("wishlist")
        .deleteOne({ id: parseInt(id) });

      return res.json({
        message: `Item with ID: ${id} deleted`,
        acknowledgement,
      });
    }

    return res.json({ message: `Invalid Item ID` });
  } catch (error) {
    throw new Error("Unable to delete data", error.message);
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

module.exports = wishlistRouter;
