const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tranSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    sender: { type: String, required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    reciever: { type: String, required: true },
    recieverId: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }
},
    {
        versionKey: false
    });

module.exports = mongoose.model('transaction', tranSchema);