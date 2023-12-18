
// introducing to you Global catches 



const express = require("express");
const app = express()
const port = 3004;

app.use(express.json())

app.post("/", (req,res)=> {
  const kidneys = req.body.kidneys
  const kidneysLength = kidneys.length;

  res.send(`you have ${kidneysLength}  kidneys`)

})

//Global catches were define at the ens of the 
//helps the user to give better errror messages
// thats why its called error handeling middleware 
// takes four arguments err => error reqest responce and next thats mean if there is another error middleware call it
// it has four args so middleware recognise it as error handeling middleware 

app.use((err,req,res,nexr)=>{
    res.status(400).json({
        message:"Something went wrong"
    })
})

app.listen(port)



// next Zod 