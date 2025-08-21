// For the 'Our Blog' section of the page

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  slug: {type: String, unique: true, required: true},
  content: {type: String, required: true},
  author: String,
  publishedAt: {type: Date, default: Date.now},
  imageUrl: String
}, {timestamps: true});

export default mongoose.model("BlogPost", blogSchema);