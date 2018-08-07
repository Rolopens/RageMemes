const mongoose = require('mongoose');

// Sign up
var userSchema = mongoose.userSchema({
    username:{
        type: String,
        require: true,
        minlength: 7,
        trim: true
    },
    email:{
        type: String,
        require: true,
        minlength: 7,
        trim: true
    },
    password:{
        type: String,
        require: true,
        minlength: 7,
        trim: true
    }
})

var user = mongoose.model("user", userSchema);

module.exports = {user};