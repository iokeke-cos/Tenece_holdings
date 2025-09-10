// For the 'Book Your Home Clean' forms

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: [true, "Service type is required"],
    enum: ["Office Cleaning", "Window Cleaning", "Carpet Cleaning", "Bedroom Cleaning", "Bathroom Cleaning", "Kitchen Cleaning"]
  },
  // for storing customer information
  customerName: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"]
  },
  customerEmail: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^[0-9]{10,15}$/, "Phone number must be 10-15 digits"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  },
  // the date of the booking
  bookingDate: {
    type: Date,
    required: [true, "Booking date is required"],
    validate: {
      validator: (value) => value > new Date(),
      message: "Booking date must be in the future"
    }
  },
  message: {
    type: String,
    maxlength: [500, "Message cannot exceed 500 characters"]
  },
  // can only be one of the 3 type specified in enum (Defaults to enum)
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  }
  // automaticalled add 'createdAt' and 'updatedAt' fields
}, {timestamps: true});

export default mongoose.model("Booking", bookingSchema);