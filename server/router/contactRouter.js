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
const multer = require("multer");

let path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });

router.route("/").get(getContact);
router.route("/").post(upload.single("photo"), createContact);
router.route("/:id").put(upload.single("photo"), updateContact);
router.route("/:id").delete(deleteContact);
router.route("/deleteAll").get(deleteAllContact);
router.route("/:id").get(getContactById);

module.exports = router;
