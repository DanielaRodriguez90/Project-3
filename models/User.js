const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    registerDate: {
        type: Date, 
        default: Date.now
    }
});

module.exports = User = mongoose.model("user", UserSchema);