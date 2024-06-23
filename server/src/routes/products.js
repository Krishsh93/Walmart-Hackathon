// Modules
const { Router } = require("express");
const { connectMongoClient } = require("../config/database");

// Routers and Variables
const productRouter = Router();

// RESTful API's
productRouter.get("/", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const products = await client
      .db("walmart")
      .collection("products")
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
