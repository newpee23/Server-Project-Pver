import express from "express";
import { getMemberApi } from "../controllers/userController";
import { LoginUserApi, registerApi } from "../controllers/authController";
import { checkRequestToken } from "../middleware/checkToken";
const router = express.Router(); //ใช้สร้างเส้นทาง

// http://localhost:5050/api/member
router.get("/member/:member_id?", checkRequestToken, getMemberApi);

// http://localhost:5050/api/register
router.post("/register", registerApi);

// http://localhost:5050/api/LoginUser
router.post("/LoginUser", LoginUserApi);

export = router;
