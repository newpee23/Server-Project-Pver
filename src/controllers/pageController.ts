import { Request, Response } from "express";
import { FormDataP0, FromP0Err } from "../types/pageType";
import { validateDataForm0, validateValueFrom0 } from "./validateController";
import { findQuestionnaireData } from "./findDataController";
import { QuestionnaireDataStatus } from "../types/findDataType";

// Page 0
export const page0Api = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataForm0: FormDataP0 = req.body.data;
    const member_id: number = req.body.member_id;
    const fId: string = req.body.fId;
   
    // ตรวจสอบว่ามีข้อมูลทุกตัวใน dataForm0 หรือไม่
    const validateStr:string = validateDataForm0(dataForm0, member_id, fId);
    if (validateStr === "") {
      // ตรวจสอบว่ามีแบบฟร์อมใน master_complete หรือไม่
      const masterComplete:QuestionnaireDataStatus[] | null = await findQuestionnaireData(fId);
      if(masterComplete !== null && masterComplete.length > 0){
        res.status(200).json({ message: `พบหมายเลขแบบสอบถาม ${fId} ถูกบันทึกแล้ว` });
        return;
      }
      // ตรวจค่าข้อมูลที่ต้องสอดคล้องกัน
      const newDataForm0: FromP0Err | boolean = validateValueFrom0(dataForm0);
      if(newDataForm0 !== true) {
        res.status(200).json({ message: newDataForm0 });
        return;
      }
      
    } else {
      res.status(200).json({ message: validateStr });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};


