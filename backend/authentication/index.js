const express = require("express");
const app = express();
const port = 3000;

const jwt = require("jsonwebtoken");
const jwtPassword = "1234";

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


app.listen(port);
