const UserModel = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken')
const catchAsyncErrors = require("./catchAsyncErrors");

// check if  user is authenticated  or not

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    // const token = req.cookies.token;
    // res.cookie('token', token)
    // console.log(token)
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler('Login first to access. ', 401))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded.id);

    next()

})

//handling users roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access`, 403))
        }
        next()
    }
}
