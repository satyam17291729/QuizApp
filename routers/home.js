import { Router } from "express";
import HomeController from "../controllers/home.controller.js"
import router from "./user.js";

const route=Router();

const home=new HomeController();
route.get("/",home.homeViews);

route.use("/users",router);

export default route;