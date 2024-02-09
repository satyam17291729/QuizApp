import { Router } from "express";
import Test from "../controllers/test.controller.js";
import auth from "../config/auth.middleware.js"
import apiRouter from "./api.js";
const route=Router();
route.use("/api",apiRouter);
const testController=new Test;
route.get("/:name",auth, testController.test);

// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
// route.get("/:name",testController.test);
export default route;