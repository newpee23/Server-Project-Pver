import express from "express";
import { checkRequestToken } from "../middleware/checkToken";
import { getQuestionnaireApi } from "../controllers/findDataController";
const router = express.Router(); //ใช้สร้างเส้นทาง

// http://localhost:5050/api/findQuestionnaire/f_id
router.get("/findQuestionnaire/:f_id", checkRequestToken, getQuestionnaireApi);

export = router;