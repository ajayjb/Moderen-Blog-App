const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username : {
         type : String,
         required : true,
         unique : true
     },
     name : {
         type : String,
         default : ""
     },
     email : {
         type : String,
         required : true,
         unique : true
     },
     password : {
         type : String,
         required : true,
     },
     profilePicture : {
         type : String,
         default : ""
     }
}, { timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;