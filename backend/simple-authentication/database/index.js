const mongoose = require("mongoose")
const {Schema} = require('mongoose')

mongoose.connect("mongodb+srv://bharatchavhan141:bvWX1QIIDa1D9oKP@cluster0.uougc26.mongodb.net/course-selling-app")

const AdminSchema = new Schema({
      username:String,
      password:String
 
});

const UserSchema = new Schema({
  username:String,
  password:String,
  purchasedCourses:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Course'
  }]

});

const CourseSchema = new Schema({
   title:String,
   description:String,
   imageLink:String,
   price:Number

})


const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports = {
   Admin,
   User,
   Course
}