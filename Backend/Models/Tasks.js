const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    duedate: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        unique: true,
    },
    important: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    }
},
{timestamps: true}
)

module.exports = mongoose.model('tasks', TaskSchema)