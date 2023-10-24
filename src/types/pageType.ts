import { RowDataPacket } from "mysql2";

export interface FormDataP0 {
  [key: string]: string | number;
  p0F1: string;
  p0F2: number;
  p0F3: number;
  p0F4: string;
  p0F5: string;
  p0F6: string;
  p0F6Name: string;
  p0F7: string;
  p0F7Name: string;
  p0F8: string;
  p0F8Name: string;
  p0F9T: number;
  p0F9: string;
  p0F10: string;
  p0F11T: number;
  p0F11: string;
  p0F12: string;
  p0F13: string;
  p0F14: string;
  p0F15: number;
  p0F16: number;
  p0F17: number;
  p0F18T: number;
  p0F18: string;
  p0F19: string;
  p0F20T: number;
  p0F20: string;
  p0F21: string;
  p0F22: string;
  p0F23: string;
  p0F24: string;
}

export interface newDataP0DB {
  [key: string]: string | number | undefined;
  fId?: string | undefined;
  p0F1: string;
  p0F2: number;
  p0F3: number;
  p0F4: string;
  p0F5: string;
  p0F6: string;
  p0F7: string;
  p0F8: string;
  p0F9: string;
  p0F10: string;
  p0F11: string;
  p0F12: string;
  p0F13: string;
  p0F14: string;
  p0F15: number;
  p0F16: number;
  p0F17: number;
  p0F18: string;
  p0F19: string;
  p0F20: string;
  p0F21: string;
  p0F23: string;
  p0F24: string;
}

export interface RequiredField {
  field: string | number; // ปรับตามประเภทของข้อมูลที่คุณใช้
  name: string;
}

export interface FromP0Err {
  [key: string]: boolean | string;
  p0F1Txt: string;
  p0F2Txt: string;
  p0F9TTxt: string;
  p0F11TTxt: string;
  p0F13Txt: string;
  p0F14Txt: string;
  p0F15Txt: string;
  p0F16Txt: string;
  p0F17Txt: string;
  p0F18TTxt: string;
  p0F23Txt: string;
}

export interface page0Query extends RowDataPacket {
  id: number;
  f_id: number;
  f1: string;
  f2: number;
  f3: number;
  f4: string;
  f5: string;
  f6: string;
  f6Name: string;
  f7: string;
  f8: string;
  f9t: number;
  f9: string;
  f10: string;
  f11t: number;
  f11: string;
  f12: string;
  f13: string;
  f14: string;
  f15: number;
  f16: number;
  f17: number;
  p0F17: number;
  f18t: number;
  f18: string;
  f19: string;
  f20t: number;
  f20: string;
  f21: string;
  f22: string;
  f23: string;
}

export interface page1F14Query extends RowDataPacket {
  f14: number;
}

export type Opprovince = {
  value: number;
  label: string;
};

export interface FormDataP1Type {
  [key: string]: string | number | null;
  p1F1: number | null;
  p1F2T: number | null;
  p1F2: string;
  p1F3: string;
  p1F4: string;
  p1F5: number | null;
  p1F6: string;
  p1F7: string;
  p1F8: number | null;
  p1F9: number | null;
  p1F10: number | null;
  p1F11: number | null;
  p1F12: number | null;
  p1F13: number | null;
  p1F14: number | null;
  p1F15: number | null;
  p1F16: number | null;
  p1F17: number | null;
  p1F18: number | null;
  p1F19: number | null;
  p1F20: number | null;
  p1F21: number | null;
  p1F22: string;
  p1F23: string;
  p1F24: number | null;
  p1F25: number | null;
  p1F26: number | null;
  p1F27: string;
  p1F28: string;
}
