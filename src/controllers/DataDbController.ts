import { FormDataP0, newDataP0DB } from "../types/pageType";

// ฟังก์ชั่นแทนค่าเพื่อเตรียมข้อมูลเข้า DB 
export const editValueFrom0 = (data:FormDataP0, member_id: number, fId: string):newDataP0DB => {
    const newDataForm0: newDataP0DB = { ...data };

    // setค่าใหม่ให้ newDataForm0 เพื่อ แทนค่าก่อนเข้า DB
    const setNewValueForm = ({ value, name }: { value: string | number; name:string; }) => {
        newDataForm0[name] = value;
    };
    // รหัสแบบสอบถาม fId
    setNewValueForm({value:fId,name:"fId"});
    // รหัสบ้าน f1
    setNewValueForm({value:data.p0F1,name:"p0F1"});
    // f2 หลังคาเรือนที่
    setNewValueForm({value:data.p0F2,name:"p0F2"});
    // f3 ชื่อหมู่บ้าน
    setNewValueForm({value:data.p0F3,name:"p0F3"});
    return newDataForm0;
}