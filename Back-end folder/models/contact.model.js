// Used in 'Contact' forms

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  // for storing message from a contact form
  name: {type: String, required: true},
  email: {type: String, required: true},
  subject: String,
  message: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model("ContactRequest", contactSchema);