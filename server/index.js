const express = require("express");
const connectdb = require("./db/conn");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectdb();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use("/api", require("./router/contactRouter"));
app.listen(port, (req, res) => {
  console.log("connected.....", port);
});
