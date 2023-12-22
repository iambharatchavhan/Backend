const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({ message: "User created successfully" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json({ title: "found users on your dataBase", users });
  } catch (error) {
    res.status(500).send("Server Error :(");
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      res.status(404).send(`User is not Found by ${userId}`);
    }

    res.json({
      Message: "User Profile is Updated SuccessFully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error :(");
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      res.status(404).send(`User not found of following id ${userId}`);
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send("Internal Server Error ;(");
  }
});

app.listen(port);
