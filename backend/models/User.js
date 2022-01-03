const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('user',userSchema)
module.exports = User;