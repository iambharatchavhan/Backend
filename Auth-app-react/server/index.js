const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/User");
const port = 3000;

const app = express();
app.use(express.json()); // parse data into json format from front end
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://bharatchavhan141:vbWvNrHCGo5tWMde@cluster0.l5wo2xh.mongodb.net/Learn-app-data"
);

// creating post method for creating users
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ name, email, password: hash });
    res.json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Generate JWT token based on email and role
        const token = jwt.sign(
          { email: user.email, role: user.role },
          "my-secret-key-brc",
          { expiresIn: "1d" }
        );

        // Store the token in cookies
        res.cookie("token", token);

        return res.json({message:"success", role: user.role});
      } else {
        return res.json({ msg: "Password is incorrect" });
      }
    } else {
      return res.json("No record exists");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});

app.listen(port, () => {
  console.log("server is running on port number" + port);
});
