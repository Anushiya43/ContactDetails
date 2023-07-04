const { timeStamp } = require("console");
const mongoose = require("mongoose");

const ContactModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", ContactModel);
module.exports = Contact;
