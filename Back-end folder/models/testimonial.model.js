// For the 'Customer Reviews' carousel

import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  // for storing customer review data
  customerName: {type: String, required: true},
  customerImageUrl: String,
  feedback: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, required: true},
  date: {type: Date, default: Date.now}
}, {timestamps: true});

export default mongoose.model("Testimonial", testimonialSchema);