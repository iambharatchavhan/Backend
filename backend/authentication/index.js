
const express = require("express");
const app = express();
const port = 3000;

const jwt = require("jsonwebtoken");
const jwtPassword = "1234";
app.use(express.json())

const All_USERS = [
  {
    username: "bharat@example.com",
    password: "12345",
    name: "bharat",
  },
  {
    username: "vinay@example.com",
    password: "12345",
    name: "vinay",
  },
  {
    username: "ram@example.com",
    password: "12345",
    name: "ram",
  },

];


const userExists = (username,password) =>{
    let userExists = false;
    for(let i=0;i<All_USERS.length;i++){
        if(All_USERS[i].username == username && All_USERS[i].password == password ){
            userExists = true;
        }
    }
    return userExists
}

app.post("/signIn", (req,res)=>{
 const username = req.body.username;
 const password = req.body.password;

 if(!userExists(username,password)){
   return res.json({message:"user does not exist in our memory database"})
 }

 var token = jwt.sign({username:username},jwtPassword);
 return res.json({token});

});

app.get("/users",(req,res)=>{
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token,jwtPassword);
    const username = decoded.username;
    res.json({username})
  } catch (error) {
     return res.status(400).json({
         message:"Your Token Is Not Valid, Please Put Correct token"
     })
  }

})


app.listen(port);
