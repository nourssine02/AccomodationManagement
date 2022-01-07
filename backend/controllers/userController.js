const UserModel = require('../models/userModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')


// REgister user  => /api/v1/register

module.exports.registerUser = catchAsyncErrors (async (req, res , next) => {
    //console.log(req.body);
    const {name, email , password} = req.body;

    try {
        const user = await UserModel.create({ name,email,password })
        res.status(201).json({
            success: true,
            user
        })

    }
    catch (err) {
        res.status(200).send({err})
    }

})