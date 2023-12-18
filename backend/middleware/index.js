
//Dumb way to do it 


const express = require("express");
const app = express();
const port = 3002;

app.get("/health-checkup",(req,res)=>{
    // pre-checks are goal of middleware 1==>auth i2==>input validation 
    // have to do bumch of prechecks here 
    // like if all are true then send response
    
     const username = req.headers.username;
     const password = req.headers.password;
     const kideneyid = req.query.kideneyid

    //* lest do pre-check
    if(!(username === "bharat" && password === "pass")){
        //! if this is true then send error tha somthing went wrong
        res.status(400).json({message:"wrong inputs username or pass"})
        return 
    }
   
    if( kideneyid != 1 && kideneyid != 2){
      res.status(400).json({message:"wrong kidneyIds"})
      return
    }

    res.json({message:"Your kidney is fine"})
});

app.listen(port)
//suppose we have more two routs for heart and eye checkup i need to repead a lot of logic here  so middleweare comes into the pitcher
// lets go to index2.js file