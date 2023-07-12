const mongoose = require("mongoose");

const ContactModel = new mongoose.Schema(
  {
    photo: { type: String, require: true },
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
