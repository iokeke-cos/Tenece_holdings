// Appears under 'Our Top Rated Cleaning Services' and also used in bookings

// Import Mongoose to allow you to interact with MongoDB
// using JS objects
import mongoose from "mongoose";

// Define the shape of the document in the MongoDB collection
const serviceSchema = new mongoose.Schema({
  // The 'title' or 'name' of the service (it must be provided)
  title: {type: String, required: true},
  // The description of the service (Optional)
  description: String,
  // The price (optional)
  price: Number,
  // Stores the URL or path of the image displayed
  imageUrl: String,
  // The category of the service (e.g. residential)
  category: String,
  // An array of strings stating all the features
  features: [String]
  // 'timestamps' automatically adds the 'createdAt' and 'updatedAt' fields
}, {timestamps: true});

// Create a model called 'Service' and export it
export default mongoose.model("Service", serviceSchema);