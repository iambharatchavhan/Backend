const express = require("express");
const { z } = require('zod');
const adminMiddleware = require('../middlewares/admin');
const { Admin, Course } = require("../database");
const router = express.Router();

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
  try {
    const admin = await Admin.findOne({username})
    if(admin){
        res.json({'message':'Account Already Exist try to login'})
    }else{
        await Admin.create({
            username: username,
            password: password
        })
    
        res.json({
            message: 'Admin created successfully'
        })
    }
    
  } catch (error) {
     res.status(500).json({'message':'internal server error'})
  }
    
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // zod in admin middleware where schema is defined

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;