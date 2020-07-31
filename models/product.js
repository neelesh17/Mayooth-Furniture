const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    imageId: String,
    company: String,
    price: Number,
    description: String,
    quantity: {type:Number, default: 0},
    type: String,
    tag: {type:String, default:"none"},
});

module.exports = {model: mongoose.model("Product", ProductSchema), ProductSchema: ProductSchema};