import { FormDataP0, FromP0Err, page0Query } from "../types/pageType";

export const formattedDateTime = (data: string) => {
  const originalDateTime = data;
  const date = new Date(originalDateTime);
  const formattedDateTime = date.toLocaleString();

  return formattedDateTime; // แสดง "2023-10-12 15:30:00"
};

function convertToGCDate(inputDate: string): string {
  const dateParts = inputDate.split("/");

  if (dateParts.length !== 3) {
    // ตรวจสอบว่าวันที่มีรูปแบบที่ถูกต้อง
    return "Invalid date format";
  }

  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  if (isNaN(parseInt(day)) || isNaN(parseInt(month)) || isNaN(parseInt(year))) {
    // ตรวจสอบว่าวันที่มีค่าที่ถูกต้อง
    return "Invalid date";
  }

  let thisYear = parseInt(year);

  if(parseInt(year) < 2500){
    // แปลงปีจาก พ.ศ. เป็น ค.ศ.
    thisYear = parseInt(year) - 543;
  }

  // สร้างรูปแบบใหม่ของวันที่
  const formattedDate = `${thisYear}-${month}-${day}`;

  return formattedDate;
}

export const dataFromP0Err: FromP0Err = {
  p0F1Txt: "",
  p0F2Txt: "",
  p0F9TTxt: "",
  p0F11TTxt: "",
  p0F13Txt: "",
  p0F14Txt: "",
  p0F15Txt: "",
  p0F16Txt: "",
  p0F17Txt: "",
  p0F18TTxt: "",
  p0F23Txt: "",
};

export const responsePage0 = (data: page0Query[]): FormDataP0 => {
  const dateTimeStringF22: string = formattedDateTime(data[0].f22);
  const dateTimeStringF23: string = formattedDateTime(data[0].f23);

  const f22 = dateTimeStringF22.split(" ");
  const f23 = dateTimeStringF23.split(" ");
  const newResponse: FormDataP0 = {
    p0F1: data[0].f1,
    p0F2: data[0].f2,
    p0F3: data[0].f3,
    p0F4: data[0].f4,
    p0F5: data[0].f5,
    p0F6: data[0].f6,
    p0F6Name: data[0].f6Name,
    p0F7: data[0].f7,
    p0F7Name: data[0].f7Name,
    p0F8: data[0].f8,
    p0F8Name: data[0].f8Name,
    p0F9T: data[0].f9t,
    p0F9: data[0].f9,
    p0F10: data[0].f10,
    p0F11T: data[0].f11t,
    p0F11: data[0].f11,
    p0F12: data[0].f12,
    p0F13: data[0].f13,
    p0F14: data[0].f14,
    p0F15: data[0].f15,
    p0F16: data[0].f16,
    p0F17: data[0].f17,
    p0F18T: data[0].f18t,
    p0F18: data[0].f18,
    p0F19: data[0].f19,
    p0F20T: data[0].f20t,
    p0F20: data[0].f20,
    p0F21: data[0].f21,
    p0F22: convertToGCDate(f22[0]),
    p0F23: f22[1].substring(0, 5),
    p0F24: f23[1].substring(0, 5),
  };

  return newResponse;
};
