 const { Router } = require("express");
const router = Router();

const userMiddleware = require('../middlewares/user');
const { User, Course } = require("../database");
const { default: mongoose } = require("mongoose");


router.post('/signup',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try {
        const userExist = await User.findOne({username})
        if(userExist){
            res.json({'message':'User already exist'})
        }else{

            User.create({
                // username:username same as username key and values are the same 
                username,
                password
            })
            res.json({'message':'user created successfully'})
        }
      
    } catch (error) {
        res.status(500).json({'message':'Internal server Error'})
    }
});


router.get('/courses', async(req,res)=>{

    try{
        const data = await User.find({})
        if(data){
            res.json({'response':data})
        }else{
            res.status(403).json({'message':'oops something went wrong'})
        }


    }catch(e){
       res.status(500).json({'message':'Internal Server Error'})
    }
  

})





router.post('/courses/:courseId',userMiddleware,async(req,res)=>{
    try {
        const courseId = req.params.courseId;
        const username = req.headers.username;
    
        
        await User.updateOne({ username: username }, { $push: { purchasedCourses: courseId } });
    
        res.json({ message: 'You have purchased this course successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
})



router.get('/purchasedCourses',userMiddleware,async(req,res)=>{

      const user = await User.findOne({ username:req.headers.username });

       console.log(user)
      const courses = await Course.find({_id:{'$in': user.purchasedCourses}})
      res.json({'courses':courses})
})


module.exports = router
