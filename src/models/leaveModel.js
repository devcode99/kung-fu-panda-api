const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    // TODO: Need to store the user id and reference the user data instead of employeeName
    //   userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    //   },
    employeeName: {
        type: String,
        required: true
    },

    // TODO: Need to store the leaveType id and reference the leave type data
    leaveType: {
        type: String,
        required: true
    },
    leaveBalance: {
        type: Number,
        required: true
    },
    numberOfDays: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    comments: String
});

const Leave = mongoose.model('Leave', LeaveSchema);

module.exports = Leave;
