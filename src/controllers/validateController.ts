import { FormDataP0, newDataP0DB } from "../types/pageType";

// ฟังก์ชันเช็คว่าข้อมูล dataForm0 ครบทุกตัวหรือไม่
export const validateDataForm0 = (data: FormDataP0, member_id: number, fId: string): boolean => {
    // ตรวจสอบข้อมูลที่ต้องการใน data และส่งค่าคืนเป็น true หากครบทุกตัว
    return (
        member_id !== undefined &&
        fId !== undefined &&
        data.p0F1 !== undefined &&
        data.p0F2 !== undefined &&
        data.p0F3 !== undefined &&
        data.p0F4 !== undefined &&
        data.p0F5 !== undefined &&
        data.p0F6 !== undefined &&
        data.p0F6Name !== undefined &&
        data.p0F7 !== undefined &&
        data.p0F7Name !== undefined &&
        data.p0F8 !== undefined &&
        data.p0F8Name !== undefined &&
        data.p0F9T !== undefined &&
        data.p0F9 !== undefined &&
        data.p0F10 !== undefined &&
        data.p0F11T !== undefined &&
        data.p0F11 !== undefined &&
        data.p0F12 !== undefined &&
        data.p0F13 !== undefined &&
        data.p0F14 !== undefined &&
        data.p0F15 !== undefined &&
        data.p0F16 !== undefined &&
        data.p0F17 !== undefined &&
        data.p0F18T !== undefined &&
        data.p0F18 !== undefined &&
        data.p0F19 !== undefined &&
        data.p0F20T !== undefined &&
        data.p0F20 !== undefined &&
        data.p0F21 !== undefined &&
        data.p0F22 !== undefined &&
        data.p0F23 !== undefined &&
        data.p0F24 !== undefined 
    );
};