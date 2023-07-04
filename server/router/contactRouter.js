const { required } = require("nodemon/lib/config");

const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
  deleteAllContact,
} = require("../controller/contactController");

router.route("/display").get(getContact);
router.route("/add").post(createContact);
router.route("/edit/:id").put(updateContact);
router.route("/delete/:id").delete(deleteContact);
router.route("/getone/:id").get(getContactById);

module.exports = router;
