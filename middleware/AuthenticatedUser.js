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
        expiresIn: '5h'
    });
}
//
function verifyAToken(req, res, next) {
        const token = req.cookies["_token"];
        console.log("cookie", token);
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

}

module.exports = {createToken, verifyAToken};