import { Request, Response } from "express";
import { getDbConnection } from "../config/dbconnect";
import { FormDataP0 } from "../types/pageType";
import { validateDataForm0 } from "./validateController";
import { editValueFrom0 } from "./DataDbController";

// Page 0 
export const page0Api = async (req: Request, res: Response): Promise<void> => {
    try {
        const dataForm0: FormDataP0 = req.body.data;
        const member_id: number = req.body.member_id;
        const fId: string = req.body.fId;
        // ตรวจสอบว่ามีข้อมูลทุกตัวใน dataForm0 หรือไม่
        if (validateDataForm0(dataForm0,member_id,fId)) {
            const newDataForm0 = editValueFrom0(dataForm0,member_id,fId);
            res.status(200).json({newDataForm0,member_id});

        } else {
            res.status(200).json({ message: 'กรุณากรอกข้อมูลหน้าปกให้ครบถ้วน' });
            return;
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
};