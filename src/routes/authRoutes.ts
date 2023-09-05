import express from "express";
import { getMember } from "../controllers/authController";
const router = express.Router(); //ใช้สร้างเส้นทาง

// http://localhost:5050/api/member
router.get("/member/:member_id?", getMember);

export = router;