// mongodb+srv://bharatchavhan141:vbWvNrHCGo5tWMde@cluster0.l5wo2xh.mongodb.net/

# connection string to the mongo database

#step 1

- setup vite_react app
- setup server
  - in server folder install some packages

```bash

 npm install
     express
     mongoose
     cors
     nodemon
     cookie-parser
     bcrypt or zod
     jsonwebtoken
```

- create global index.js file for server in that initialize server

```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = 8080;

const app = express();
app.use(express.json()); // parse data into json format from front end
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
  console.log("server is running on port number" + port);
});
```

- connect to the database

```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = 8080;

const app = express();
app.use(express.json()); // parse data into json format from front end
app.use(cors());
app.use(cookieParser());

// connecting to the database
mongoose.connect(
  "mongodb+srv://bharatchavhan141:vbWvNrHCGo5tWMde@cluster0.l5wo2xh.mongodb.net/Learn-app-data"
);

app.listen(port, () => {
  console.log("server is running on port number" + port);
});
```

- lest create model folder for schemas

  > model --> User.js

  lets define schemas in it

```javascript


  const mongoose = require("mongoose");
  

const UserSchema = new mongoose.Schema({
'name':String,
'email':String,
'password':String,
'role':{
type:String,
default:'visitor'
}
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel;


```
- import this model in server.js page 
```javascript


```
