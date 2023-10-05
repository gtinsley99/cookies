const { Router } = require("express");
const userRouter = Router();
const { registerUser, loginUser, loginWithToken } = require("./controllers");
const { hashPassword, passwordCheck, tokenCheck } = require("../middleware/index");

// Route to add a user, password hashed before add to db
userRouter.post("/users/register", hashPassword, registerUser);

// Route to login and create token
userRouter.post("/users/login", passwordCheck, loginUser);

// Route to login with token
userRouter.get("/users/loginwithtoken", tokenCheck, loginWithToken);

module.exports = userRouter;