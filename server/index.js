const express = require("express");
const connectdb = require("./db/conn");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectdb();

app.use("", require("./router/contactRouter"));
app.listen(port, (req, res) => {
  console.log("connected.....", port);
});
