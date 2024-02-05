import { Router } from "express";
import UserController from "../controllers/users.controller.js";
import authMiddleware from "../config/auth.middleware.js";
const route=Router();
const userController=new UserController();
route.get("/about",authMiddleware,userController.aboutView);
route.get("/signup",userController.signupView);
route.get("/signin",userController.signinView);
route.post("/create",userController.createUser);
route.get("/test",authMiddleware,userController.test);
route.post("/login",userController.login);
route.get("/logout",userController.logOut);
export default route