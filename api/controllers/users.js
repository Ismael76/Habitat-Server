const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    //Generate Salt To Add To Password
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password, salt);
    const { username, email } = req.body;
    const user = await User.create(username, email, hashed);
    res.status(201).json(user);
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function login(req, res) {
  try {
    const user = await User.findUser(req.body.email);
    if (!user) {
      throw new Error("User Does Not Exist!");
    }
    // const authed = req.body.password === user.password;
    const authed = await bcrypt.compare(req.body.password, user.password);
    if (!!authed) {
      // const playload = {email: user.email, password: user.password }

      // const sendToken = ( err, token ) => {
      // if(err){
      // throw new Error('Error in token generation')
      // } res.status(200).json({
      // success: true,
      // token: token
      //})
      //}
      // jwt.sign(playload, "super-secret-password", {expiresIn:60}, sendToken)
      // res.status(200).json({
      //   user: user.username,
      //   email: user.email,
      //   password: user.password,
      // });

      res.status(200).json({
        id: user.id,
        user: user.username,
        email: user.email,
        password: user.password,
      });
    } else {
      throw new Error("User Could Not Be Authenticated :(");
    }
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
}

async function showUsers(req, res) {
  try {
    const users = await User.all;
    res.status(201).json(users);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { register, login, showUsers };
