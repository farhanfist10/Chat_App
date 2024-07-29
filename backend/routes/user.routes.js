import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSidebar } from "../controllers/user.controller.js";

const router =express.Router();

router.get("/",protectRoute,getUserForSidebar)
router.get("/hello",(req,res)=>{
    return "Hello World"
})
export default router;