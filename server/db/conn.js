const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.n6zu8hn.mongodb.net/lmydb?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("db connected");
  } catch (err) {
    console.log("Not db conected", err);
  }
};

module.exports = connectdb;
