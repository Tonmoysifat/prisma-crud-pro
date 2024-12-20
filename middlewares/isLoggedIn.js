const prisma = require("../prisma/index");
const jwt = require("jsonwebtoken");
// require("dotenv").config();

const isLoggedIn = async (req,res,next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.send("Your are not logged in")
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await prisma.user.findUnique({
            where:{
                id: decoded.userId
            },
            select:{
                id:true,
                name:true,
                email:true
            },
        })
        next()
    } catch (error) {
        throw new Error(error);
        
    }
}
module.exports = isLoggedIn