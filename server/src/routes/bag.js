// Modules
const { Router } = require("express");
const mongoose = require("mongoose");
const url = require("url");

// Routers and Variables
const { connectMongoClient } = require("../config/database");
const bagRouter = Router();

// RESTful API's
bagRouter.get("/", async (req, res) => {
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
      .collection("bag")
      .find({ email: email })
      .toArray();

    // Calculating the total cost of the items in the bag
    let totalCost = 0;
    totalCost = products.reduce(
      (sum, item) => item.price * item.quantity + sum,
      0
    );
    totalCost = totalCost.toFixed(2);

    return res.json({
      message: "Data fetched successfully",
      products,
      totalCount: products.length,
      totalCost,
    });
  } catch (error) {
    throw new Error("Could not fetch products", error.message);
  } finally {
    client.close();
    console.log(`Database disconnected`);
  }
});

bagRouter.get("/:id", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();

    const { id } = req.params;
    const product = await client
      .db("walmart")
      .collection("bag")
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

bagRouter.post("/add", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const product = await client
      .db("walmart")
      .collection("bag")
      .insertOne({ ...req.body });

    return res.json({ message: product });
  } catch (error) {
    throw new Error("Unable to add item to bag", error.message);
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

bagRouter.patch("/update/:id", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const { id } = req.params;
    const acknowledgement = await client
      .db("walmart")
      .collection("bag")
      .updateOne({ id: parseInt(id) }, { $set: req.body });

    return res.json({ message: "Updated", acknowledgement });
  } catch (error) {
    throw new Error("Unable to update the item", error.message);
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

bagRouter.delete("/delete", async (req, res) => {
  let client;
  try {
    const parsedURL = url.parse(req.url, true);
    const query = parsedURL.query;
    const { email } = query;

    client = await connectMongoClient();
    const acknowledgement = await client
      .db("walmart")
      .collection("bag")
      .deleteMany({ email: email });

    return res.json({ message: "Products removed from bag", acknowledgement });
  } catch (error) {
    throw new Error("Unable to delete items from bag", error.message);
  } finally {
    await client.close();
    console.log("Database disconnected");
  }
});

bagRouter.delete("/delete/item/:id", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const { id } = req.params;
    const acknowledgement = await client
      .db("walmart")
      .collection("bag")
      .deleteOne({ id: parseInt(id) });

    return res.json({ message: "Deleted", acknowledgement });
  } catch (error) {
    throw new Error("Unable to delete the item", error.message);
  } finally {
    await client.close();
    console.log("Database disconnectedF");
  }
});

module.exports = bagRouter;
