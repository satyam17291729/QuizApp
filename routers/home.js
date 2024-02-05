import { Router } from "express";
import HomeController from "../controllers/home.controller.js"
import router from "./user.js";
import authMiddleware from "../config/auth.middleware.js";

const route=Router();

const home=new HomeController();
route.get("/",authMiddleware,home.homeViews);

route.use("/users",router);

export default route;