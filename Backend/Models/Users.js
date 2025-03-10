const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: {
        type: mongoose.Types.ObjectId,
        ref: 'tasks'
    }
})

module.exports = mongoose.model('user', UserSchema)