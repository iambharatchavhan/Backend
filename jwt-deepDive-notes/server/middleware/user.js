const jwt = require("jsonwebtoken")

// jwt based admin middleware
const secret = require("../scretkey")

function userMiddleware(req,res,next){

 // get the jwt token 
 const token = req.headers.authorization;


 const words = token.split(" ")  // [barer adsdfgkskdrkldfkaef]
 const jwtToken = words[1]

 const decodedValue = jwt.verify(jwtToken , secret)
 if(decodedValue.username){
    next();
 }else{
    res.status(403).json({message:"Token is invalid"})
 }
}

module.exports = userMiddleware;