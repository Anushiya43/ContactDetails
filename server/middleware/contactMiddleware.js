const { timeStamp } = require("console");
const mongoose = require("mongoose");

const ContactModel = new mongoose.Schema(
  {
    ContactId: { type: Number, default: 1, required: true },
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

const Contact = mongoose.model("contact", ContactModel);
module.exports = Contact;
