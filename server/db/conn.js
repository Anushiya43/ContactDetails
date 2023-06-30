const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.n6zu8hn.mongodb.net/lmydb?retryWrites=true&w=majority"
    );
    console.log("db connected");
  } catch (err) {
    console.log("Not db conected");
  }
};

module.exports = connectdb;
