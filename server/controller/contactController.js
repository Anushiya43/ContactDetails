const express = require("express");
const Contact = require("../middleware/contactMiddleware");

const createContact = async (req, res) => {
  let { name, email } = req.body;
  let photo = req.file;
  console.log(photo);
  const newContact = new Contact({
    photo: photo.filename,
    name: req.body.name,
    email: req.body.email,
  });
  console.log(newContact);
  await newContact
    .save()
    .then((savedContact) => {
      res.send(savedContact);
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
      res.send("error");
    });
};

const updateContact = async (req, res) => {
  const oldphoto = 0;
  console.log(req.params.id);
  const { name, email } = req.body;
  const photo = req.file;
  console.log(photo);
  const data = await Contact.findOne({ contactId: req.param.id });

  console.log(data.photo);
  if p)  {
    photo  =  data.photo;
  };
  const oldContact = await Contact.findOneAndUpdate(
    { _id: req.params.id },
    { photo: photo.filename, name, email },
    { new: true }
  );
  if (oldContact) {
    res.send(oldContact);
  } else {
    res.send("gg error");
  }
};

const deleteContact = async (req, res) => {
  console.log(req.params.id);
  await Contact.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("one data deleted");
    })
    .catch((err) => {
      res.send("gg error");
    });
};

const deleteAllContact = async (req, res) => {
  await Contact.deleteMany({})
    .then(() => {
      res.send("all data deleted");
    })
    .catch((err) => {
      res.send("gg error");
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
