const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxlength: [100, 'room name can not exced 100 characters']
    },
    address: {
        type: String,
        required: [true, 'Please enter room address'],
        trim: true,
        maxlength: [100, 'room address can not exced 100 characters']
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
    images:
    {
        type: String,
        required: true
    }
    ,
    wifi: {
        type: String,
        required: false
    },
    fitness_center: {
        type: String,
        required: false
    },
    parking: {
        type: String,
        required: false
    },
    swimmingPool: {
        type: String,
        required: false
    },
    contactNo: {
        type: String,
        required: [true, 'Please enter allocator phone number'],

    },
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
    status: {
        type: String,
        required: [true, 'Please enter the status of this room '],
    },
    maximumAdultsAllow: {
        type: Number,
        required: [true, 'Please enter the maximum adults allow']
    },
    maximumChildsAllow: {
        type: Number,
        required: [true, 'Please enter the maximum childs allow']
    },
    capacity: {
        type: Number,
        required: [true, 'Please enter the capacity of rooms']
    },
    allocator: {
        type: String,
        required: [true, 'Please enter room allocator']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true

            },
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Room', roomSchema);