# Index.js file -first file
 - Dumb way to doing validation 

 ```javascript

//Dum way to do it 



const express = require("express");
const app = express();
const port = 3002;

app.get("/health-checkup",(req,res)=>{
    // pre checks are goal of middleware 1==>auth i2==>input validation 
    // have to do bumch of prechecks here 
    // like if all are true then send response
    
     const username = req.headers.username;
     const password = req.headers.password;
     const kideneyid = req.query.kideneyid

    //* lest doprecheck
    if(!(username === "bharat" && password === "pass")){
        //! if this is true then send error tha something went wrong
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
//suppose we have more two routs for heart and eye checkup i need to repeat a lot of logic here  so middleware comes into the pitcher
// lets go to index2.js file
 
 ```

 # index2.js file Contains
  - middleware 

```javascript
const express = require("express");
const app = express();
const port = 3003;

// we can pass bunch of functions for pre checks here called middleware
// also the call back function also receives more than two param req res and one called next which called when pre checks are good

app.get(
  "/health-checkup",
  (req, res, next) => {
    res.send("this is first function if all well call next function");
    next();
  },
  (req, res, next) => {
    res.send("this is function two if all well call next function");
    next();
  },
  (req, res) => {
    res.send("need next param cos this is last function if all well no ");
  }
);

// this is same if we define this function outside
const firstFunction = (req, res, next) => {
  console.log("middleware 1 : checks userInputs");
  next();
};

const secondFunction = (req, res, next) => {
  console.log("middleware 2 : checks authentication");
  next();
};

app.get("/health-checkup-md", firstFunction, secondFunction, (req, res) => {
  res.send("welcome Your are all well");
});




// very famous middleware calculateRequests lets see an example ==> 

let numberOfRequest = 0 ;

const calculateRequests = (req,res,next) => {
    numberOfRequest ++ 
    next();
}

app.get("/numberofrequest", calculateRequests,(req,res)=>{
    res.send(`number of requests are ${numberOfRequest}`)
})


// anothore middleware tha we needed when the reqest.body comes ....Why? // in post request
// cos we dont know what type of data body will send --it could be json, html, etc so we need it i.e

app.use(express.json())
// what did use mean? it means use everywhere where it middleware need .

 app.post("/new-request",calculateRequests,(req,res)=>{
    res.json({message:"hello body"})
 })
// we called calculate request explicitly but we don`t called express.json() cos we tell previously use it everywhere
app.listen(port);


```

# index4.js - Global Checks

```javascript

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
//helps the user to give better error messages
// thats why its called error handling middleware 
// takes four arguments err => error request response and next thats mean if there is another error middleware call it
// it has four args so middleware recognize it as error handling middleware 

app.use((err,req,res,nexr)=>{
    res.status(400).json({
        message:"Something went wrong"
    })
})

app.listen(port)



// next Zod 


```
# index4.js --> Zod

```javascript
//? zod ==> better input validation 

//!TypeScript-first // schema validation // with static type inference

const express = require("express");
const app = express()
const port = 3000;
const zod = require("zod")
const schema = zod.array(zod.number()) // pre check in one line of code

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

```
