const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "The title is required"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "The price is required"],
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
