import { FormDataP0,FromP0Err,RequiredField } from "../types/pageType";
import { dataFromP0Err } from "./initialDataFrom";

// แยกชั่วโมงและนาทีจากเวลาแต่ละตัว
export const compareTimes = (time1: string, time2: string): string => {
  // แยกชั่วโมงและนาทีจากเวลาแต่ละตัว
  const [hour1, minute1] = time1.split(":").map(Number);
  const [hour2, minute2] = time2.split(":").map(Number);

  // เปรียบเทียบชั่วโมง
  if (hour1 < hour2) {
    return `>`;
  } else if (hour1 > hour2) {
    return `<`;
  } else {
    // หากชั่วโมงเท่ากัน เปรียบเทียบนาที
    if (minute1 < minute2) {
      return `<`;
    } else if (minute1 > minute2) {
      return `>`;
    } else {
      return `=`;
    }
  }
};

// ฟังก์ชันเช็คว่าข้อมูล dataForm0 ครบทุกตัวหรือไม่
export const validateDataForm0 = (data: FormDataP0,member_id: number,fId: string): string => {
  // ข้อความเเจ้งเตือน
  const requiredFields: RequiredField[] = [
    { field: member_id, name: "ผู้ใช้งานระบบ" },
    { field: fId, name: "หมายเลขแบบสอบถาม" },
    { field: data?.p0F1, name: "รหัสบ้าน" },
    { field: data?.p0F2, name: "หลังคาเรือนที่" },
    { field: data?.p0F3, name: "ชื่อหมู่บ้าน" },
    { field: data?.p0F4, name: "บ้านเลขที่" },
    { field: data?.p0F5, name: "หมู่ที่" },
    { field: data?.p0F6, name: "ตำบล" },
    { field: data?.p0F7, name: "อำเภอ" },
    { field: data?.p0F8, name: "จังหวัด" },
    { field: data?.p0F9T, name: "คำนำหน้าชื่อเจ้าของบ้าน" },
    { field: data?.p0F9, name: "ชื่อเจ้าของบ้าน" },
    { field: data?.p0F10, name: "นามสกุลเจ้าของบ้าน" },
    { field: data?.p0F11T, name: "คำนำหน้าชื่อผู้ให้ข้อมูล" },
    { field: data?.p0F11, name: "ชื่อผู้ให้ข้อมูล" },
    { field: data?.p0F12, name: "นามสกุลผู้ให้ข้อมูล" },
    { field: data?.p0F13, name: "หมายเลขโทรศัพท์ที่ติดต่อได้" },
    { field: data?.p0F14, name: "จำนวนครอบครัวในครัวเรือน" },
    { field: data?.p0F15, name: "จำนวนสมาชิกทั้งหมดในครัวเรือน" },
    { field: data?.p0F16, name: "เพศชาย" },
    { field: data?.p0F17, name: "เพศหญิง" },
    { field: data?.p0F18T, name: "คำนำหน้าชื่อผู้สำรวจ 1" },
    { field: data?.p0F18, name: "ชื่อผู้สำรวจ 1" },
    { field: data?.p0F19, name: "นามสกุลผู้สำรวจ 1" },
    { field: data?.p0F20T, name: "คำนำหน้าชื่อผู้สำรวจ 2" },
    { field: data?.p0F20, name: "ชื่อผู้สำรวจ 2" },
    { field: data?.p0F21, name: "นามสกุลผู้สำรวจ 2" },
    { field: data?.p0F22, name: "สำรวจ ณ วันที่" },
    { field: data?.p0F23, name: "เริ่มสำรวจเวลา" },
    { field: data?.p0F24, name: "เสร็จเวลา" },
  ];

  const missingFields = requiredFields
    .filter(
      (fieldObj) =>
        fieldObj.field === undefined ||
        fieldObj.field === null ||
        /^\s*$/.test(String(fieldObj.field))
    )
    .map((fieldObj) => fieldObj.name);

  if (missingFields.length > 0) {
    return `ไม่พบข้อมูล ${missingFields.join(", ")} กรุณาตรวจสอบข้อมูลอีกครั้ง`;
  }

  return "";
};

// ฟังก์ชันเช็คว่าข้อมูล dataForm0 ว่าค่าแต่ละตัวแปลถูกต้องหรือไม่ ไม่เช็ค null
export const validateValueFrom0 = (data: FormDataP0): FromP0Err | boolean => {
  const newFormErr: FromP0Err = { ...dataFromP0Err };
  const setNewFormErr = ({ txt, name }: { txt: string; name: string }) => {
    newFormErr[name + "Txt"] = txt;
  };

  // f1 รหัสบ้าน
  const f1Val: string = data.p0F1;
  const f1Number:number = parseInt(f1Val);
  if (!/^[0-9]{10}$/.test(f1Val) || f1Val.length < 10 || isNaN(f1Number))setNewFormErr({name: "p0F1",txt: "ระบุ รหัสบ้าน 10 ตัวเป็นตัวเลขเท่านั้น",});
  
  // f2 หลังคาเรือนที่
  const f2Val: number = data.p0F2;
  if (isNaN(f2Val) || f1Val.length < 1) setNewFormErr({name: "p0F2",txt: "ระบุ หลังคาเรือนที่ เป็นตัวเลขเท่านั้น",});

  //  f9T คำนำหน้า
  const f9tVal: number = data.p0F9T;
  if (isNaN(f9tVal) || f9tVal < 1) setNewFormErr({ name: "p0F9T", txt: "กรุณาเลือก คำนำหน้าชื่อเจ้าของบ้าน" });
  
  // f11T คำนำหน้า
  const f11tVal: number = data.p0F11T;
  if (isNaN(f11tVal) || f11tVal < 1) setNewFormErr({name: "p0F11T",txt: "กรุณาเลือก คำนำหน้าชื่อผู้ให้ข้อมูล",});

  // f13 หมายเลขโทรศัพท์ที่ติดต่อได้
  const f13Val: string = data.p0F13;
  if (f13Val !== "-" && f13Val !== ""){
    if(!/^[0-9]{10}$/.test(f13Val)) setNewFormErr({name: "p0F13",txt: "ระบุ หมายเลขโทรศัพท์ 10 ตัว เป็นเลขเท่านั้น",});
  }
   

  //f14 จำนวนครอบครัวในครัวเรือน
  const f14Val: number = parseInt(data.p0F14) ? parseInt(data.p0F14) : 0;
  if (isNaN(f14Val) || f11tVal < 1) setNewFormErr({name: "p0F14",txt: "กรุณาระบุ จำนวนครอบครัว ตั้งแต่ 1 เป็นต้นไป",});

  // f15 จำนวนสมาชิกทั้งหมดในครัวเรือน
  const f15Val:number = data.p0F15;
  if (isNaN(f15Val) || f11tVal < 1)setNewFormErr({name: "p0F15",txt: "กรุณาระบุ จำนวนสมาชิก ตั้งแต่ 1 เป็นต้นไป",});

  //f16 f17 จำนวนเพศชายและหญิง
  const f16Val = data.p0F16;
  const f17Val = data.p0F17;
  const totalGender = f16Val + f17Val;
  if (totalGender !== 0) {
    if (totalGender !== f15Val) {
      if (f11tVal < 1) setNewFormErr({name: "p0F16",txt: "กรุณาระบุ จำนวนเพศให้เท่ากับ จำนวนสมาชิก",});
    }
  } else {
    setNewFormErr({name: "p0F16",txt: "กรุณาระบุ เพศชาย ตั้งแต่ 1 เป็นต้นไป",});
    setNewFormErr({name: "p0F17",txt: "กรุณาระบุ เพศหญิง ตั้งแต่ 1 เป็นต้นไป",});
  }

  // f18t ชื่อผู้สำรวจ 1.
  const f18tVal: number = data.p0F18T;
  if (isNaN(f18tVal) || f18tVal < 1)setNewFormErr({ name: "p0F18T", txt: "กรุณาเลือก คำนำหน้าชื่อ" });

  // f23 f24
  const f23Val: string = data.p0F23;
  const f24Val: string = data.p0F24;
  const f23f24Val: string = compareTimes(f23Val, f24Val);

  if (f23Val.length !== 0 && f24Val.length !== 0) {
    if (f23f24Val !== ">") {
      setNewFormErr({name: "p0F23",txt: "ระบุ เสร็จเวลาน้อยกว่าเริ่มสำรวจเวลา",});
    } else {
      setNewFormErr({ name: "p0F23", txt: "" });
    }
  }

  if(newFormErr.p0F1Txt !== "" || newFormErr.p0F2Txt !== "" || newFormErr.p0F9TTxt  !== "" || newFormErr.p0F11TTxt !== "" || newFormErr.p0F13Txt !== "" || newFormErr.p0F14Txt !== "" || newFormErr.p0F15Txt !== "" || newFormErr.p0F16Txt !== "" || newFormErr.p0F17Txt !== "" || newFormErr.p0F18TTxt !== "" || newFormErr.p0F23Txt !== ""){
    return newFormErr;
  }

  return true;
};


