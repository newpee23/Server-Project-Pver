import { Request, Response } from "express";
import { QuestionnaireDataStatus } from "../types/findDataType";
import { getDbConnection } from "../config/dbconnect";


export const getQuestionnaireApi = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const f_id: string = req.params.f_id;
    const member_id: string = req.params.member_id;

    // Check จำนวน f_id
    const numberOfCharacters: number = f_id.length;
    if (numberOfCharacters !== 5) {
      res.status(500).json({ message: `กรุณากรอกรหัสแบบสอบถาม 5 หลัก` });
      return;
    }

    // Check questionnaire Data
    const masterComplete = await findQuestionnaireData(f_id);
   
    if(masterComplete === null){
      res.status(500).json({ message: `เกิดข้อผิดพลาดในการประมวลผลคำขอ` });
      return;
    }
    if (masterComplete.length === 0) {
      res.status(200).json({ masterComplete });
      return;
    }
    
    // Check ว่าคนเรียกข้อมูลเป็นคนบันทึกแบบสอบถามหรือไม่
    // const p0_u: string = masterComplete[0].p0_u.replace(/\D/g, "");
    const queryFid: number = masterComplete[0].member_id;
    if (parseInt(member_id) !== queryFid) {
      res.status(500).json({ message: `คุณไม่สามารถเข้าถึงแบบสอบถาม ${f_id} นี้ได้` });
      return;
    }

    res.status(200).json(masterComplete);
    return;
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const findQuestionnaireData = async (
  f_id: string
): Promise<QuestionnaireDataStatus[] | null> => {
  try {
    const connection = await getDbConnection();
    const query = "SELECT * FROM `master_complete` WHERE f_id = ? ORDER BY id ASC";
    const [results] = await connection.query<QuestionnaireDataStatus[]>(query, [f_id]);
    // console.log(results);
    return results;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};
