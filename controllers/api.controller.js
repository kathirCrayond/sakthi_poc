const bcrypt = require("bcryptjs");
const pool = require("../db");
// const jwtGenerator = require("../utils/jwtGenerator");

//USER REGISTRATION CONTROLLER
module.exports.user_register = async (req, res) => {
  console.log("=====")
  try {
    //1. destructure the values from req.body
    let { firstname, lastname, email, phone } = req.body;
    console.log(JSON.stringify(req.body))
    const newUser = await pool.query(
      "INSERT INTO users (firstname, lastname, email, phone) VALUES($1, $2, $3, $4) RETURNING *",
      [firstname, lastname, email, phone]
    );
   console.log(JSON.stringify(req.body))

   res.status(200).json({message: "added successfully"});
    
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

//USER LOGIN CONTROLLER
module.exports.fetchalluser = async (req, res) => {
  try {
    //1. destructure the user details
    const { email, password } = req.body;

    //1. Get the user from the database
    const user = await pool.query("SELECT * FROM users");

    //2. check if user does not exist and return an error else login the user
    if (user.rows.length === 0) {
      res.status(404).json({
        error: "Sorry! An account with that email doesn't exist!",
      });
    } else {
      //check if the password entered matches the one in the database
     res.status(200).json({
      count : user.rows.length
     })
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};
module.exports.fetchuserbyemail = async (req, res) => {
  try {
    //1. destructure the user details
    const { email } = req.query;

    //1. Get the user from the database
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    // res.render('home', { name: user.rows[0].firstname });
   res.status(200).json(user.rows[0])
    //2. check if user does not exist and return an error else login the user
   console.log(JSON.stringify(user))
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: err.message,
    });
  }
};

//USER TOKEN VERIFY

module.exports.user_token_verify = async (req, res) => {
  try {
    //return response if authorization is met else return an error
    res.status(200).json({ authorized: true });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
