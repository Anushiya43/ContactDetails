const express = require("express");
const connectDb = require("./db/conn");
require("dotenv").config();
const app = express();
connectDb();

app.get("/", (req, res) => {
  res.send("hi");
});
const server = app.listen(process.env.PORT || 6003, () => {
  console.log("conected....");
});
