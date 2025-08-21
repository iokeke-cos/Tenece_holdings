// For the 'Customer Satisfaction Stats' section

import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  label: {type: String, required: true},
  value: {type: String, required: true}
}, {timestamps: true});

export default mongoose.model("Stats", statsSchema);