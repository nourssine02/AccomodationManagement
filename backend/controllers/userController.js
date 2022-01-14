const UserModel = require('../models/userModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')


// REgister user  => /api/v1/register

module.exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    try {
        const user = await UserModel.create({ name, email, password })
        res.status(201).json({
            success: true,
            user
        })

    }
    catch (err) {
        res.status(200).send({ err })
    }

})

// Login User => /api/v1/login

module.exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const {email, password } = req.body;


        //check if email and password  enter by user
      if( !email || !password ){
          return next(new ErrorHandler('Please enter email and password' ,400));
      }
      //finding user in database

      const user  = await UserModel.findOne({ email}).select('+password')

      if(!user){
        return next(new ErrorHandler('Invalid email or password' , 401));
      }
      //checks if password is correct or not
    //   const isPasswordMatched = await UserModel.comparePassword(password);
    // if (!isPasswordMatched) {
    //     return next(new ErrorHandler('Invalid email or password', 401));
    // }
    


})
