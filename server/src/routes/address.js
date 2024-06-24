// Modules
const { Router } = require("express");
const { connectMongoClient } = require("../config/database");

// Address router
const addressRouter = Router();

// RESTful API's
addressRouter.post("/", async (req, res) => {
  let client;
  try {
    client = await connectMongoClient();
    const acknowledgement = await client
      .db("walmart")
      .collection("addresses")
      .insertOne({ ...req.body });

    return res.json({
      message: "Address added",
      acknowledgement,
      status: true,
    });
  } catch (error) {
    throw new Error("Could not add address", error.message);
  } finally {
    await client.close();
    console.log("Database disconnected");
  }
});

module.exports = addressRouter;
