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
// what did use mean? it means use everywere where it middlewere need .

 app.post("/new-request",calculateRequests,(req,res)=>{
    res.json({message:"hello body"})
 })
// we called calculate request explicitly but we dont called express.json() cos we tell preveously use it eveyware
app.listen(port);
