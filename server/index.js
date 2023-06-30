const express = require("express");
const connectdb = require("./db/conn");

require("dotenv").config();
const app = express();

connectdb();

Contact.deleteMany({})
  .then(() => {
    console.log("all data deleted");
  })
  .catch((err) => {
    console.log("gg error");
  });
app.use("/api/contacts", require("./router/contactRouter"));
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("connected.....");
});
