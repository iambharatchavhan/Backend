
// creating server 

const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req,res)=>{
//     res.send("Your server is Running up")
// })

// connecting to database through mongoose
app.use(express.json())
const mongoose = require("mongoose") 

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

const Profile = mongoose.model("Profiles",{
     username:String,
     name:String,
     password:String
})

app.post('/signup-user', async (req,res)=> {

    const username = req.body.username
    const name = req.body.name
    const password = req.body.name

    const existingUser = await Profile.findOne({username:username})
    if(existingUser){
        res.status(404).send("user already exist in the Database")
    }

   const profile = new Profile({
    username:username,
    name:name,
    password:password,

   })

   profile.save();
   res.json({"message":"user added in database successfully"})
})

app.get("/user-profiles/",async(req,res)=>{
     try {
        const users = await Profile.find()
        res.json({users})

     } catch (error) {
        res.status(500).send("internal server Error")
     }
})

app.listen(port)