const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    company: String,
    price: number,
    discription: String,
    quantity: number,
});

module.exports = mongoose.model("Product", ProductSchema);