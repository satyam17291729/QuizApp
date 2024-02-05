import { Router } from "express";
import Test from "../controllers/test.controller.js";
const route=Router();

const testController=new Test;
route.get("/:name",testController.test);
route.get("/css",testController.test);
route.get("/js",testController.test);
route.get("/node",testController.test);
route.get("/c",testController.test);
route.get("/cplus",testController.test);
route.get("/c#",testController.test);
route.get("/java",testController.test);
route.get("/nextjs",testController.test);
route.get("/reactjs",testController.test);
export default route;