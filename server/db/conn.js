const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.n6zu8hn.mongodb.net/Contacts?retryWrites=true&w=majority"
    );
    console.log("Db conected...");
  } catch (err) {
    console.log("Db not connected");
  }
};

module.exports = connectDb;
