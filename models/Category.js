const mongoose = require("mongoose");

// Defining Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Defining Category Model
module.exports = mongoose.model("Category", categorySchema);
