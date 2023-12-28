const {User} = require('../database')

async function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.header.password;

    try {
       const user = User.findOne({ username,password})  
       if(user){
        next();
       }else{
        res.status(403).json({'message':'user does not exist'})
       }

    } catch (error) {
        res.status(500).json({'message':'Internal server Error'})
    }

}

module.exports = userMiddleware;