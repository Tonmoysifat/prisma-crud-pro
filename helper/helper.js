const jwt = require("jsonwebtoken");

require("dotenv").config();

const generateToken = (userId) =>{
    return jwt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn:"24h"})
}

module.exports = generateToken