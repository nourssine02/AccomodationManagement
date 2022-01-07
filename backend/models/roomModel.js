const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxlength: [100, 'room name can not exced 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter room price'],
        trim: true,
        maxlength: [5, 'room name can not exced 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter room description'],

    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            url: {
                type: String,
                required: true
            }
        }
    ],
    roomsType: {
        type: String,
        required: [true, 'Please select type of this rooms '],
        enum: {
            values: [
                'Single',
                'Double',
                'Family'
            ],
            message: 'Please select coorect type of rooms'
        }
    },
    capacity: {
        type: Number,
        required: [true, 'Please enter the capacity of rooms']
    },
    allocator: {
        type: String,
        required: [true, 'Please enter room allocator']
    },
    reservations: [
        {
            checkIn: {
                type: Object,
                required: [true, 'Please enter your Check in date of this room']

            },
            checkOut: {
                type: Object,
                required: [true, 'Please enter  your Check out date free of this room']
            }
        }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Room', roomSchema);