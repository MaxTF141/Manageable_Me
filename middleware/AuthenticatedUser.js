// Importing Authentication Middleware
require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');
// Creating a token
function createToken(user) {
    return sign({
        UserEmail: user.UserEmail,
        UserPassword: user.UserPassword
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '2h'
    });
}
//
function verifyAToken(req, res, next) {
    try{
        const token = req.cookies["authorization_token"] !== null ? req.cookies["authorization_token"] : "Please register" ;
        let isValid = null;
        if(token !== "Please register") {
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json({err: "Please register"})
            }
        }else {
            res.status(400).json({err: "Please register"})
        }
    }catch(e) {
        res.status(400).json({err: e.message});
    }
}

module.exports = {createToken, verifyAToken};