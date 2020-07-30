const mongoose = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, required:true, unique:true},
    phoneNo: {type: Number, required:true},
    email: {type: String, unique:true, required: true},
    password: {type: String},
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);