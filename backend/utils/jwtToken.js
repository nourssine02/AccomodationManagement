const { sign, verify } = require('jsonwebtoken');


//create and send token  and save in the cookie

const sendToken = (user, statusCode, res) => {

    //create jwt token
    const token = user.getJwtToken();


    //options for  cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true

    }
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}
module.exports = sendToken;


const createToken = (user) => {
    const accessToken = sign({ email: user.email, id: user.id }, process.env.JWT_SECRET);
    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['accessToken'];
    if (!accessToken) {
        return res.status(400).json({ error: "User not Authenticated!" });
    }
    try {
        const validToken = verify(accessToken, process.env.JWT_SECRET)
        if (validToken) {
            req.authenticated = true
            return next()
        }

    } catch (err) {
        return res.status(400).json({ error: err})

    }
}

module.exports = { createToken , validateToken};
