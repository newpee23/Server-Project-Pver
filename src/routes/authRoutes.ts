import express from "express";
import { getMember } from "../controllers/userController";
import { register } from "../controllers/authController";
const router = express.Router(); //ใช้สร้างเส้นทาง

// http://localhost:5050/api/member
router.get("/member/:member_id?", getMember);

// http://localhost:5050/api/register
router.post("/register", register);

export = router;