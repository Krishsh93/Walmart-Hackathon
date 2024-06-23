// Modules
const { Router } = require("express");
const { connectMongoClient } = require("../config/database");
const url = require("url");

// Routers and Variables
const productRouter = Router();

// RESTful API's
productRouter.get("/", async (req, res) => {
  let client;
  try {
    const parseURL = url.parse(req.url, true);
    const query = parseURL.query;

    // Getting various queries for filtering and sorting the data
    const { category, order, page } = query;

    // Query for getting the desired data
    const categoryQuery = category
      ? { $exists: true, $eq: category }
      : { $exists: true, $ne: category };

    client = await connectMongoClient();
    let products = await client
      .db("walmart")
      .collection("products")
      .find({ category: categoryQuery })
      .skip((parseInt(page ?? 1) - 1) * 20)
      .limit(20)
      .toArray();

    if (order) {
      if (order === "asc")
        products = products.sort((a, b) => a.price - b.price);
      else products = products.sort((a, b) => b.price - a.price);
    }

    const total = await client
      .db("walmart")
      .collection("products")
      .countDocuments();

    return res.json({
      message: "Data fetched successfully",
      products,
      limit: 20,
      total,
      page: parseInt(page ?? 1),
    });
  } catch (error) {
    throw new Error("Could not fetch products", error.message);
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

productRouter.get("/:id", async (req, res) => {
  let client;
  try {
    const { id } = req.params;
    client = await connectMongoClient();
    const product = await client
      .db("walmart")
      .collection("products")
      .find({ id: Number(id) })
      .toArray();

    return res.json({ message: "Data fetched successfully", product });
  } catch (error) {
    throw new Error(
      "Could not find product. Internal server error",
      error.message
    );
  } finally {
    await client.close();
    console.log(`Database disconnected`);
  }
});

module.exports = productRouter;
