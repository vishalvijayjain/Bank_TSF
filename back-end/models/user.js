const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true },
    balance: { type: Number, required: false },
    phone: { type: Number, required: false }
},
    {
        versionKey: false
    });

module.exports = mongoose.model('user', userSchema);