const User = require("./model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const token = jwt.sign(
      { username: req.body.username },
      process.env.JWTPASSWORD,
      { expiresIn: "7d" }
    );
    console.log(token);
    res.status(201).json({
      message: "User registered",
      user: {
        user: user,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    if (error.errors[0].message === "username must be unique") {
      res.status(409).json({
        message: "Username taken",
      });
      return;
    } else if (error.errors[0].message === "Validation is on email failed") {
      res.status(400).json({
        message: "Invalid email address",
      });
      return;
    }
    res.status(501).json({
      message: error.message,
      detail: error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    const token = jwt.sign(
      { username: req.body.username },
      process.env.JWTPASSWORD,
      { expiresIn: "7d" }
    );
    console.log(token);
    res.status(201).json({
      message: "User logged in",
      user: {
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error,
    });
  }
};

const loginWithToken = async (req, res) => {
  try {
    const userDetails = await User.findOne({
      where: { username: req.user.username },
    });
    res.status(201).json({
      message: "User logged in",
      user: {
        username: userDetails.username,
        email: userDetails.email,
        avatar: userDetails.avatar,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      message: error.message,
      detail: error,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  loginWithToken,
};
