const Booking = require('../models/bookingModel')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Room = require('../models/roomModel')
const ObjectId = require('mongodb').ObjectId;

//create a new booking => /api/v1/booking/new

exports.newBooking = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    var id = req.params.id;
    var room = new ObjectId(id);

    req.body.room = room;

    const booking = await Booking.create(req.body)
    res.status(200).json({
        success: true,
        booking,

    })
})


// Get single booking  => /api/v1/booking/:id
exports.getSingleBooking = catchAsyncErrors(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id).populate('user', 'name email')

    if (!booking) {
        return next(new ErrorHandler('No Booking found with this ID', 404))
    }
    res.status(200).json({
        success: true,
        booking
    })
})


// Get loogged user bookings  => /api/v1/bookings/me
exports.myBookings = catchAsyncErrors(async (req, res, next) => {
    const bookings = await Booking.find({ user: req.user.id })

    res.status(200).json({
        success: true,
        bookings
    })
})


// Get all bookings - Admin => /api/v1/admin/bookings
exports.allBookings = catchAsyncErrors(async (req, res, next) => {
    const bookings = await Booking.find()

    let total = 0;
    bookings.forEach(booking => {
        total += booking.totalPrice
    })

    res.status(200).json({
        success: true,
        total,
        bookings
    })
})




// Update booking - Admin => /api/v1/admin/booking/:id
exports.updateBooking = catchAsyncErrors(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id)

    if (booking.bookingStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this booking', 404))
    }
    booking.deliveredAt = Date.now()

    await booking.save()

    res.status(200).json({
        success: true

    })
})


// Delete booking  => /api/v1/admin/booking/:id
exports.deleteBooking = catchAsyncErrors(async (req, res, next) => {
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
        return next(new ErrorHandler('No Booking found with this ID', 404))
    }
    await booking.remove()

    res.status(200).json({
        success: true
    })
})


