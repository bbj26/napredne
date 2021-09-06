const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('account', accountSchema);