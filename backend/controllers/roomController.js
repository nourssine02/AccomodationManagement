const Room = require('../models/roomModel')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures');
const ObjectId = require('mongodb').ObjectId;


//create new Rooms => /api/v1/admin/room/new
exports.newRoom = catchAsyncErrors(async (req, res, next) => {


    req.body.user = req.user.id;

    const room = await Room.create(req.body);

    res.status(201).json({
        success: true,
        room,

    })
})



//Get all Rooms =>  /api/v1/rooms
exports.getRooms = catchAsyncErrors(async (req, res, next) => {

    const resPage = 9;
    const RoomCount = await Room.countDocuments()
    const apiFeatures = new APIFeatures(Room.find(), req.query)
        .search()
        .filter()
        .pagination(resPage)
    const rooms = await apiFeatures.query;
    res.status(200).json({
        success: true,
        RoomCount,
        count: rooms.length,
        rooms
    })


})


//Get single room details => /api/v1/room/:id

exports.getSingleRoom = catchAsyncErrors(async (req, res, next) => {

    const room = await Room.findById(req.params.id)
    if (!room) {
        return next(new ErrorHandler('Room not found ', 404));
    }

    res.status(200).json({
        success: true,
        room

    })

})

//update Room  => /api/v1/admin/room/:id

exports.updateRoom = catchAsyncErrors(async (req, res, next) => {

    let room = await Room.findById(req.params.id);

    if (!room) {
        return res.status(404).json({
            success: false,
            message: 'Room not found'
        })
    }
    room = await Room.findByIdAndUpdate(req.params.id, req.body, {

        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        room

    })


})


//Delete Room => /api/v1/admin/room/:id

exports.deleteRoom = catchAsyncErrors(async (req, res, next) => {

    const room = await Room.findById(req.params.id);

    if (!room) {
        return res.status(404).json({
            success: false,
            message: 'Room not found'
        })
    }

    await room.remove();

    res.status(200).json({
        success: true,
        message: "Room is deleted ."

    })

})


// create new review  => /api/v1/review

exports.createRoomReview = catchAsyncErrors(async (req, res, next) => {



   
    const { rating, comment, user, name , roomId } = req.body;

    const review = {
        user: user,
        name: name,
        rating: Number(rating),
        comment,

    }
    const room = await Room.findById(roomId);
    const isReviewd = room.reviews.find(
        r => r.user.toString() === req.user.id.toString()
    )
    if (isReviewd) {
        room.reviews.forEach(review => {
            if (review.user.toString() === req.user.id.toString()) {
                review.comment = comment;
                review.rating = rating
            }
        })

    } else {
        room.reviews.push(review);
        room.numOfReviews = room.reviews.length
    }
    room.ratings = room.reviews.reduce((acc, item) => item.rating + acc, 0) / room.reviews.length
    await room.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })
})

// Get Room Reviews =>  /api/v1/reviews
exports.getRoomReviews = catchAsyncErrors(async (req, res, next) => {


    const room = await Room.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: room.reviews

    })
})


// Delete Room Reviews =>  /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {


    const room = await Room.findById(req.query.roomId);

    const reviews = room.reviews.filter(review => review._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length;

    const ratings = room.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

    await Room.findByIdAndUpdate(req.query.roomId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        reviews: room.reviews

    })
})
