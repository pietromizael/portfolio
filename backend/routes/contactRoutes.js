const express = require('express');
const router = express.Router();
const Contact = require("../controllers/contactController");

router.post("/contact", Contact.createContact);

module.exports = router;