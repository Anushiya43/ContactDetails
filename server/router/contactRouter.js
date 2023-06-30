const { required } = require("nodemon/lib/config");

const express = require("express");
const router = express.Router();
const { getContact } = require("../controller/contactController");

router.route("/").get(getContact);

module.exports = router;
