import { Router } from "express";
import apiController from "../controllers/api.controller.js";
const route=Router();
const api=new apiController();
route.get("/",api.dataGiver);
route.post("/score",api.dataReciver);
export default route;