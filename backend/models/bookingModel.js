const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({

    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    checkIn: {
        type: String,
        required: true

    },
    checkOut: {
        type: String,
        required: true
    },
    numberOfAdults: {
        type: Number,
        required: true

    },
    numberOfChilds: {
        type: Number,
        required: true

    },
    numberOfDays: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    deliveredAt: {
        type: Date,
    },
    bookingStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('Booking', bookingSchema)


