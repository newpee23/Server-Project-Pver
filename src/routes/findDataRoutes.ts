import express from "express";
import { checkRequestToken } from "../middleware/checkToken";
import { getBanApi, getQuestionnaireApi } from "../controllers/findDataController";
import { findPage0Api } from "../controllers/pageController";

const router = express.Router(); //ใช้สร้างเส้นทาง

// http://localhost:5050/api/findQuestionnaire/f_id
router.get("/findQuestionnaire/:f_id/:member_id", checkRequestToken, getQuestionnaireApi);

// http://localhost:5050/api/findBan
router.get("/findBan", getBanApi);

// http://localhost:5050/api/findPage0/f_id
router.get("/findPage0/:f_id", findPage0Api);

export = router;