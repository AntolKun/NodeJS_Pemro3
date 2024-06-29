const express = require("express");
const router = require("./routes/routes");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/pemro3");
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Failed to connect to MongoDB: ", error);
});

database.once("connected", () => {
  console.log("Connected to MongoDB");
});

app.use("/", router);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
