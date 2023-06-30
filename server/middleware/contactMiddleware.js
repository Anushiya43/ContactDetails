const mongoose = require('mongoose');

const ContactModel = new mongoose.Schema({
    ContactId : Number,
	Name: String,
	Age: Number,	
});

const Contact = mongoose.model('contact',ContactModel);
module.exports= Contact
	
