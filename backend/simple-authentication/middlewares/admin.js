const { Admin } = require("../database");


async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;



  try {
    const myAdmin = await Admin.findOne({username:username, password:password});
  console.log(myAdmin)
    if (myAdmin){
      next();
    } else {
      res.status(403).json({ message: "admin does not exist" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server Error" });
  }
}

module.exports = adminMiddleware;


