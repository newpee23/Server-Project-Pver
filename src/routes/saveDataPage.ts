import express from "express";
import { page0Api } from "../controllers/pageController";
import { checkRequestToken } from "../middleware/checkToken";
const router = express.Router(); //ใช้สร้างเส้นทาง

// http://localhost:5050/api/insert/savePage0
router.post("/insert/savePage0", checkRequestToken ,page0Api);

export = router;