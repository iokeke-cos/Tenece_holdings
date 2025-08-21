// For the 'Book Your Home Clean' forms

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  // A 'unique ID' field that has a relationship
  // with rhe 'Service' document (like a foreign key)
  serviceId: {type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true},
  // for storing customer information
  customerName: {type: String, required: true},
  customerEmail: {type: String, required: true},
  phoneNumber: String,
  address: String,
  // the date of the booking
  bookingDate: {type: Date, required: true},
  // can only be one of the 3 type specified in enum (Defaults to enum)
  status: {type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending"}
  // automaticalled add 'createdAt' and 'updatedAt' fields
}, {timestamps: true});

export default mongoose.model("Booking", bookingSchema);