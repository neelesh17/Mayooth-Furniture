const mongoose = require("mongoose");

let CartSchema = new mongoose.Schema({
    items: [{type: mongoose.Schema.Types.ObjectId, ref: "Products"}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model("Cart", CartSchema);