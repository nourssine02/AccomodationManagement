const UserModel = require('../models/userModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const ErrorHandler = require('../utils/errorHandler');
//const { createToken, validateToken } = require('../utils/jwtToken');
const JWT = require("jsonwebtoken");


// Register user  => /api/v1/register

module.exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;


    const user = await UserModel.create({ name, email, password })

    //create jwt token
    const token = user.getJwtToken();


    //options for  cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true

    }
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
 

})

// Login User => /api/v1/login

module.exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;


    //check if email and password  enter by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400));
    }
    //finding user in database

    const user = await UserModel.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }
    // checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }

    //create jwt token
    const token = user.getJwtToken();


    //options for  cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true

    }
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
 


});




//Logout User => /api/v1/logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "You've been Logout !"
    });

});


//set currently logged in user details => /api/v1/me

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await UserModel.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
})




//Get all Users =>  /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {

    const users = await UserModel.find();
    res.status(200).json({
        success: true,
        count: users.length,
        users
    })
})

// Get user details => /api/v1/admin/user/:id
exports.getuserDetails = catchAsyncErrors(async (req, res, next) => {

    const user = await UserModel.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User not found with id : ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user

    })

})

//update User  => /api/v1/admin/user/:id

exports.updateUser = catchAsyncErrors(async (req, res, next) => {


    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    }
    const user = await UserModel.findByIdAndUpdate(req.params.id, newUserData, {

        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true

    })


})



//Delete User => /api/v1/admin/user/:id

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {

    const user = await UserModel.findById(req.params.id);


    if (!user) {
        return next(new ErrorHandler(`User not found with id : ${req.params.id}`));
    }

    await user.remove();

    res.status(200).json({
        success: true,

    })

})
