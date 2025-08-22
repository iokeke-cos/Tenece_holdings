// For the 'The Shine Guarantee' section

import mongoose from "mongoose";

const guaranteeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  badgeImageUrl: String
}, {timestamps: true});

export default mongoose.model("Guarantee", guaranteeSchema);