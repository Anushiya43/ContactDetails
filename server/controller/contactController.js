const express = require("express");
const Contact = require("../middleware/contactMiddleware");

const createContact = async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact
    .save()
    .then((savedContact) => {
      console.log("User Saved", savedContact);
    })
    .catch((err) => {
      console.log("you must provide contact");
    });
};

const getContactById = async (req, res) => {
  console.log(req.param.id);
  await Contact.findOne({ contactId: req.param.id })
    .then((data) => {
      console.log("nn", data);
    })
    .catch((err) => {
      console.log("error");
    });
};

const updateContact = async (req, res) => {
  const oldContact = await Contact.findById({ contactId: req.param.id });
  if (!oldContact) {
    oldContact.contactId = req.body.contactId;
    oldContact.name = req.body.name;
    oldContact.email = req.body.email;
    oldContact
      .save()
      .then(() => {
        console.log("saved");
      })
      .catch((err) => {
        console.log("not inserted");
      });
  } else {
    console.log("gg error");
  }
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
