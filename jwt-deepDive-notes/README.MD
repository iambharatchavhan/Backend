# Understanding The JWT-Base Authentication For bigener from scratch

## What is the server ?
When you create an Express.js application, you set up a server that listens for incoming HTTP requests. When a request is received, the server uses the defined routes and middleware to handle the request and send an appropriate response back to the client.

example :
```javascript
const express = require("express")
const app = express();
const port = 3000;

// basic port to greet the world
app.get('/greet', (req,res)=>{
    res.json({'message':'Hello world i am the basic server'})
})



app.listen(port,()=>{
    console.log("server is up and running on port" + " " + port)
})

```

## what is Authentication ?

Authentication is the process of verifying the identity of a user or system to ensure they have the necessary permissions to access certain resources or perform specific actions. In the context of your example with the "greet" endpoint, authentication involves confirming that individuals attempting to access the data from this endpoint are authorized to do so.

In simpler terms, think of it like having a special room (the "greet" endpoint data) that only specific people (authenticated users) are allowed to enter. Before someone can enter this room and read the greet message, we perform checks to make sure they are indeed allowed access. This verification process is what we called as authentication.


### Hashing   >>--the one way-->

Hashing is a crucial aspect of password security on websites like Facebook. When you sign up or log in, your password is not stored in its plain text form in the database. Instead, it undergoes a process called hashing.

Hashing involves using a **one-way** mathematical function to convert your password into a fixed-length string of characters, which is the hash. The critical characteristic of a good hash function is that it's a **one-way process** — you can easily go from the password to the hash, but it's computationally infeasible to go from the hash back to the original password.

This hashed version of your password is what gets stored in the database. When you attempt to log in, the server hashes the entered password and compares it to the stored hash. If they match, the server knows that the entered password is correct without actually storing or revealing the original password.

This adds a layer of security because even if the database is compromised, attackers only gain access to hashed versions of passwords, which are extremely difficult to reverse engineer back to the actual passwords. Hashing is a fundamental practice in safeguarding user credentials and enhancing the overall security of online services.

### encryption <==Two way ==>

Encryption is a process of converting information or data into a coded form to prevent unauthorized access. In short, it's a way to secure data by making it unreadable to anyone who doesn't have the necessary key or credentials to decipher or "decrypt" it. Encryption is commonly used to protect sensitive information during transmission over networks or when stored on devices and servers.

# Now What is JWT - json web token?
JWTs are commonly used for authentication. When a user logs in, the server generates a JWT, signs it with a secret key, and sends it back to the client. The client can then include this token in the headers of subsequent requests to access protected resources on the server. The server verifies the token's signature and, if valid, grants access to the requested resources.

JWTs are stateless, meaning the server doesn't need to keep track of the user's state between requests. This makes JWTs a scalable and efficient solution for authentication in distributed systems.

- Accepts the json data and  convert into token
- The token will be converted into json again but needs the secret key that only server has 

#### Encoding JSON Data into a Token:
During the authentication or authorization process, the server takes JSON data (such as user information or claims) and uses a specific encoding algorithm to convert this data into a JSON Web Token (JWT).
The JWT typically consists of three parts: the header, the payload, and the signature. These parts are base64-encoded, and the resulting strings are concatenated with dots to form the complete JWT.

#### Decoding the Token with a Secret Key:
The JWT is then sent to the client, which can include it in the headers of subsequent requests.
When the server receives a request with a JWT, it decodes the token to retrieve the original JSON data. This decoding involves splitting the JWT into its three parts, base64-decoding each part, and obtaining the original JSON payload.

To ensure the integrity of the token and verify that it hasn't been tampered with, the server uses a secret key (known only to the server) to validate the token's signature.
This process provides a secure way to transmit information between parties. The JWT contains claims that can be trusted because they are digitally signed. The reliance on a secret key for signature verification ensures that only the server, possessing the key, can validate and trust the information within the JWT.

# Middlewares --|:|--|:|-->

In Express.js, middleware functions are functions that have access to the request object `(req)`, the response object `(res)`, and the next function in the application’s request-response cycle. These functions can perform tasks,
 - modify the request and response objects, or 
 - end the request-response cycle. 
 - Middleware functions are added to the Express application using the app.use() method.

 Suppose we have have park and have 3 gates and before entering any get first authorized with middleware 

 ```javascript 
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


 
 
 ```
 ```javascript
 if endpoint have valid query passed then middleware authorize and user will passed through gate
  eg:  http://localhost:3000/park-gate2?ticket=free

  response ==> 
  {
    "message": "Enjoy your second ride"
  }

 ```