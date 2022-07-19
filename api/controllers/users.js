const User = require("../models/User");
const bcrypt = require("bcryptjs");

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

    const authed = await bcrypt.compare(req.body.password, user.password);
    if (!!authed) {
      res.status(200).json({
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
