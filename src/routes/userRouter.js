const {Router}= require("express");
const {userHandler}= require("../handler/userHandler");
const userRouter=Router();

userRouter.get("/",userHandler);

module.exports={userRouter};