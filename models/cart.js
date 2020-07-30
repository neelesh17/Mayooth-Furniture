const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
    items: [{type: mongoose.Schema.Types.ObjectId, ref: "Products"}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});