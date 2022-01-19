const Room = require('../models/roomModel')


const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

//create new rRooms => /api/v1/admin/room/new
exports.newRoom = catchAsyncErrors(async (req, res, next) => {

    //req.body.user = req.user.id; => for defined user
    const room = Room.create(req.body);

    res.status(201).json({
        success: true,
        room
    })
})




//Get all Rooms =>  /api/v1/rooms
exports.getRooms = catchAsyncErrors(async (req, res, next) => {

    const rooms = await Room.find();
    res.status(200).json({
        success: true,
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
