import { Router } from "express";
import UserController from "../controllers/users.controller.js";
const route=Router();
const userController=new UserController();
route.get("/about",userController.aboutView);
export default route