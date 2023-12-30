const express = require("express")
const app = express();
const port = 3000;

// basic port to greet the world

// middleware for checkpoint
function theTicketCheckerMiddleware (req,res,next){
    const ticket = req.query.ticket;
    if(ticket === 'free'){
        next();
    }else{
        res.status(403).send("unauthorized:Please buy a ticket")
    }
}

app.use(theTicketCheckerMiddleware) // will check all endpoints
 // or one bye one like this
// app.get('/park-gate',theTicketCheckerMiddleware, (req,res)=>{
//     res.json({'message':'Enjoy your ride'})
// })

app.get('/park-gate', (req,res)=>{
    res.json({'message':'Enjoy your ride'})
})

app.get('/park-gate2', (req,res)=>{
    res.json({'message':'Enjoy your second ride'})
})

app.get('/park-gate3', (req,res)=>{
    res.json({'message':'Enjoy your third ride'})
})




app.listen(port,()=>{
    console.log("server is up and running on port" + " " + port)
})

