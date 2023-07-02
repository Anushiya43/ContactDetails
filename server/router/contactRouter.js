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

router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .put(updateContact)
  .delete(deleteContact)
  .get(getContactById);

module.exports = router;
