const express = require("express");
const Contact = require("../middleware/contactMiddleware");

const createContact = async (req, res) => {
  const newContact = new Contact({
    ContactId: 102,
    Name: "Veni",
    Age: 24,
  });
  await newContact
    .save()
    .then((savedContact) => {
      console.log("User Saved", savedContact);
    })
    .catch((err) => {
      console.log("error");
    });
};

const getContactById = async (req, res) => {
  let id = req.param.id;
  await Contact.findById({ contactId: id })
    .then((contact) => {
      res.send(contact);
    })
    .catch((err) => {
      console.log("error");
    });
};

const updateContact = async (req, res) => {
  await Contact.findOne()
    .then(() => {
      console.log("all data deleted");
    })
    .catch((err) => {
      console.log("gg error");
    });
};

const deleteContact = async (req, res) => {
  await Contact.findOneAndDelete({ contactId: req.param.id })
    .then(() => {
      console.log("all data deleted");
    })
    .catch((err) => {
      console.log("gg error");
    });
};

const deleteAllContact = async (req, res) => {
  await Contact.deleteMany({})
    .then(() => {
      console.log("all data deleted");
    })
    .catch((err) => {
      console.log("gg error");
    });
};

const getContact = async (req, res) => {
  const allContacts = await Contact.find();
  if (!allContacts) {
    console.log("error in allContacts displayed");
  } else {
    res.send(allContacts);
    console.log("all datas are  displayed");
  }
};

module.exports = {
  createContact,
  updateContact,
  getContactById,
  getContact,
  deleteContact,
  deleteAllContact,
};
