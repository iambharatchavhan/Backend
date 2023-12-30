const mongoose = require("mongoose")


mongoose.connect('database string')

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    // not understood but processing this logic
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})


const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imgLink:String,
    price:Number
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema)


module.exports = {
    Admin,
    User,
    Course
}
