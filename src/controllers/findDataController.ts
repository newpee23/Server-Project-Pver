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
      res.status(500).json({ message: `Please enter a 5-digit questionnaire code.` });
      return;
    }

    // Check questionnaire Data
    const masterComplete = await findQuestionnaireData(f_id);
    if (masterComplete.length === 0) {
      res.status(200).json({ masterComplete });
      return;
    }

    // Check ว่าคนเรียกข้อมูลเป็นคนบันทึกแบบสอบถามหรือไม่
    const p0_u: string = masterComplete[0].p0_u.replace(/\D/g, "");
    if (member_id !== p0_u) {
      res.status(500).json({ message: `You do not have access to the questionnaire ${f_id}.` });
      return;
    }

    res.status(200).json(masterComplete);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const findQuestionnaireData = async (
  f_id: string
): Promise<QuestionnaireDataStatus[]> => {
  try {
    const connection = await getDbConnection();
    const query = "SELECT * FROM `master_complete` WHERE form_id = ? ORDER BY rec_id ASC";
    const [results] = await connection.query<QuestionnaireDataStatus[]>(query, [f_id]);

    return results;
  } catch (error: unknown) {
    console.error(error);
    // throw new Error(`Error: ${error}`);
    return [];
  }
};
