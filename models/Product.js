const mongoose = require("mongoose");

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
// Define Product Model
module.exports = mongoose.model("Product", productSchema);
