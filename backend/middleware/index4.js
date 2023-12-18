//? zod ==> better input validation 

//!TypeScript-first // schema validation // with static type inference

const express = require("express");
const app = express()
const port = 3000;
const zod = require("zod")
const schema = zod.array(zod.number()) // precheck in one line of code

app.use(express.json())



app.post("/validate-kidneys",(req,res)=>{
     const kidneys = req.body.kidneys
     const responce = schema.safeParse(kidneys)

      if(!(responce.success)){
        res.status(404).json({message:"Inputs are incorrect please try again later"})
      }else{
        
        res.json({responce})
      }
  

})



app.listen(port)