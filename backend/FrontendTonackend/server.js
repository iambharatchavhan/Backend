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

app.listen(port)