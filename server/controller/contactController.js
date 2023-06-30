const express = require("express");
const Contact = require("../middleware/contactMiddleware");
const getContact = (req, res) => {
  const newContact = new Contact({
    ContactId: 102,
    Name: "Veni",
    Age: 24,
  });
  newContact
    .save()
    .then((savedContact) => {
      console.log("User Saved", savedContact);
    })
    .catch((err) => {
      console.log("error");
    });
  let id = 101;
  Contact.findById(id)
    .then((contact) => {
      res.send(contact);
    })
    .catch((err) => {
      console.log("error");
    });
};

module.exports = { getContact };
