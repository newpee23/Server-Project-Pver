import { Request, Response } from "express";
import { FormDataP0, FromP0Err, page0Query } from "../types/pageType";
import { validateDataForm0, validateValueFrom0 } from "../middleware/validateController";
import { findQuestionnaireData } from "./findDataController";
import { QuestionnaireDataStatus } from "../types/findDataType";
import { insertMasterComplete, insertPage0 } from "../models/insertModel";
import { queryPage0 } from "../models/getModel";
import { responsePage0 } from "../middleware/initialDataFrom";
import { updateMasterComplete, updatePage0 } from "../models/updateModel";

// Page 0 save
export const page0Api = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataForm0: FormDataP0 = req.body.data;
    const member_id: number = req.body.member_id;
    const fId: string = req.body.fId;
   
    // ตรวจสอบว่ามีข้อมูลทุกตัวใน dataForm0 หรือไม่
    const validateStr:string = validateDataForm0(dataForm0, member_id, fId);
    if (validateStr === "") {
      // ตรวจสอบว่ามีแบบฟร์อมใน master_complete หรือไม่
      const masterComplete:QuestionnaireDataStatus[] | null = await findQuestionnaireData(fId, member_id);

      if(masterComplete !== null && masterComplete.length > 0){
        res.status(200).json({ message: `พบหมายเลขแบบสอบถาม ${fId} ถูกบันทึกแล้ว` , status: false});
        return;
      }
      // ตรวจค่าข้อมูลที่ต้องสอดคล้องกัน
      const newDataForm0: FromP0Err | boolean = validateValueFrom0(dataForm0);
      if(newDataForm0 !== true) {
        res.status(200).json({ message: newDataForm0 , status: false});
        return;
      }
      // Insert master_complete 
      const addMasterComplete: boolean = await insertMasterComplete(member_id, fId, 'page0');
      if(!addMasterComplete){
        res.status(200).json({ message: "เกิดข้อผิดพลาดการบันทึกหน้าปก" , status: false});
        return;
      }
      // Insert page0
      const addPage0:boolean = await insertPage0(dataForm0,member_id, fId);
      if(!addPage0){
        res.status(200).json({ message: "เกิดข้อผิดพลาดการบันทึกหน้าปก" , status: false});
        return;
      }
      res.status(200).json({ message: "บันทึกข้อมูลหน้าปกสำเร็จ" , status: true});
      return;
    } else {
      res.status(200).json({ message: validateStr , status: false});
    }

  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: error , status: false});
  }
};

// Page 0 find
export const findPage0Api  = async (req: Request, res: Response): Promise<void> => {
  try {
    const fId: string = req.params.f_id;
    // ดึงข้อมูล page0
    const page0Data: page0Query[] | null = await queryPage0(fId);
    if(page0Data === null) {
      res.status(200).json({ message: `พบข้อผิดพลาดการประมวลผลหน้าปก` , status: false});
      return;
    }
    // แปลงข้อมูลให้ client
    const response = responsePage0(page0Data);
    res.status(200).json({ message: response , status: true});
    return;
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: error , status: false});
  }
};

// Page Update Data
export const updatePage0Api = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataForm0: FormDataP0 = req.body.data;
    const member_id: number = req.body.member_id;
    const fId: string = req.body.fId;
   
    // ตรวจสอบว่ามีข้อมูลทุกตัวใน dataForm0 หรือไม่
    const validateStr:string = validateDataForm0(dataForm0, member_id, fId);
    if (validateStr === "") {
      // ตรวจสอบว่ามีแบบฟร์อมใน master_complete หรือไม่
      const masterComplete:QuestionnaireDataStatus[] | null = await findQuestionnaireData(fId, member_id);
      if(masterComplete === null || masterComplete.length === 0){
        res.status(200).json({ message: `หมายเลขแบบสอบถาม ${fId} ไม่สามารถแก้ไขได้` , status: false});
        return;
      }
      // ตรวจค่าข้อมูลที่ต้องสอดคล้องกัน
      // const newDataForm0: FromP0Err | boolean = validateValueFrom0(dataForm0);
      // if(newDataForm0 !== true) {
      //   res.status(200).json({ message: newDataForm0 , status: false});
      //   return;
      // }
      // Update master_complete 
      const editMasterComplete: boolean = await updateMasterComplete(member_id, fId, 'page0');
      if(!editMasterComplete){
        res.status(200).json({ message: "เกิดข้อผิดพลาดการแก้ไขหน้าปก" , status: false});
        return;
      }
      // Update Page0
      const editPage0:boolean = await updatePage0(dataForm0, fId);
      if(!editPage0){
        res.status(200).json({ message: "เกิดข้อผิดพลาดการแก้ไขหน้าปก" , status: false});
        return;
      }
      res.status(200).json({ message: "แก้ไขข้อมูลหน้าปกสำเร็จ" , status: true});
      return;
    } else {
      res.status(200).json({ message: validateStr , status: false});
    }
    return;
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: error , status: false});
    return;
  }
};


