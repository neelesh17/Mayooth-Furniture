const mongoose = require("mongoose");
const ProductSchema = require("./product").ProductSchema;

let CartSchema = new mongoose.Schema({
    items: [{type: ProductSchema}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model("Cart", CartSchema);