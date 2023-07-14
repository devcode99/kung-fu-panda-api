const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    work: {
        type: String,
        required: true
    },

    hours: {
        type: Number,
        required: true
    },

    updateContent: String,
    type: String,

     // TODO: Need to store project id, instead of name, provide ref to Skills model
    projectTitle: String,

    clientChat: String,

    // TODO: Need to store skill id, instead of name, provide ref to Skills model
    skillTitle: String,

    // TODO: Need to store user id, instead of employeeId, provide ref to User model
    employeeId: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
