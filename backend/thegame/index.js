// creating four routes for get post put delete 

const express = require("express")
const app = express();
const port = 3002;
app.use(express.json())

let users =[{
    name: "sam",
    kidneys: [{
        healthy: false
    },
],
   
}]


app.get('/',(req,res)=>{

    // logic
 const samKindneys = users[0].kidneys;
 const numberOfKidneys = samKindneys.length

 let numberOfHealthyKindneys = 0;
 for(let i=0; i< samKindneys.length ; i++){
    if(samKindneys[i].healthy){
        numberOfHealthyKindneys = numberOfHealthyKindneys + 1;
    }
 }

const numberOfUnhealthyKindneys = numberOfKidneys - numberOfHealthyKindneys;
 // sending responce
res.json({
    numberOfKidneys,
    numberOfHealthyKindneys,
    numberOfUnhealthyKindneys
 }) 
})



app.post('/',(req,res)=>{
 // in post you send data in the body 
 const isHealty = req.body.isHealty;
 users[0].kidneys.push({
    healthy:isHealty
 })
 
res.json({
    msg:"new kidney added"
})
})


app.put('/',(req,res)=>{
    for(let i = 0 ; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
        res.json({})
    }
})


app.delete('/',(req,res)=>{
    let newKidneys = [];
    for(let i=0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
             newKidneys.push({healthy:true})
        }
    }
    res.json({msg:"Deleted"})
})
app.listen(port)

