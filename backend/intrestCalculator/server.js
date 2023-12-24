
const express = require("express");
const app = express()
const port = 8000;

app.use(express.json())



app.get("/sumOf-Two-Numbers",(req,res)=>{
     const a = parseInt(req.query.a)
     const b = parseInt(req.query.b)
     let result = a + b
    res.json({result:result.toString()})
})

app.get("/interest",(req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid integers for principal, rate, and time.' });
    }

    if (time === 0) {
        return res.status(400).json({ error: 'Time should be greater than zero.' });
    }

    const interest = (principal*rate*time)/100;
    const total = principal + interest

    res.json({
        total:total.toString(),
        interest:interest.toString(),
    })
})

app.listen(port)