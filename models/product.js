const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    imageId: String,
    price: String,
    discription: String,
    colors: [{type :String}],
});

module.exports = mongoose.model("Product", ProductSchema);