import { getDbConnection } from "../config/dbconnect";
import { FormDataP0 } from "../types/pageType";

// Update master_complete
export const updateMasterComplete = async (
  member_id: number,
  fId: string,
  page: string
): Promise<boolean> => {
  let sql: string = "UPDATE master_complete SET ";

  if (page === "page0") sql += `p0_user = ?, p0_time = ?`;
  if (page === "page1") sql += `p1_user = ?, p1_time = ?`;
  if (page === "page3") sql += `p3_user = ?, p3_time = ?`;
  if (page === "page4") sql += `p4_user = ?, p4_time = ?`;
  if (page === "page5") sql += `p5_user = ?, p5_time = ?`;
  if (page === "page6") sql += `p5_user = ?, p6_time = ?`;
  if (page === "page7") sql += `p7_user = ?, p7_time = ?`;
  if (page === "page8") sql += `p8_user = ?, p8_time = ?`;
  if (page === "page9") sql += `p9_user = ?, p9_time = ?`;
  if (page === "page10") sql += `p10_user = ?, p10_time = ?`;
  if (page === "page11") sql += `p11_user = ?, p11_time = ?`;
  if (page === "page12") sql += `p12_user = ?, p12_time = ?`;
  if (page === "page13") sql += `p13_user = ?, p13_time = ?`;
  if (page === "page14") sql += `p14_user = ?, p14_time = ?`;
  if (page === "page15") sql += `p15_user = ?, p15_time = ?`;
  if (page === "page16") sql += `p16_user = ?, p16_time = ?`;
  if (page === "page17") sql += `p17_user = ?, p17_time = ?`;
  if (page === "page18") sql += `p18_user = ?, p18_time = ?`;

  // WHERE
  sql += "WHERE f_id = ? AND member_id = ?";

  const values: (string | number | Date | null)[] = [
    member_id, // member_id
    new Date(), // เวลาที่อัพเดต
    fId, // f_id
    member_id, // member_id
  ];

  try {
    const connection = await getDbConnection();
    await connection.query(sql, values);

    return true;
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};

// Update updatePage0
export const updatePage0 = async (
  data: FormDataP0,
  fId: string
): Promise<boolean> => {
  const sql: string = `UPDATE page0 SET f1 = ?,f2 = ?,f3 = ?,f4 = ?,f5 = ?,f6 = ?,f7 = ?,f8 = ?,f9t = ?,f9 = ?,f10 = ?,
    f11t = ?,f11 = ?,f12 = ?,f13 = ?,f14 = ?,f15 = ?,f16 = ?,f17 = ?,f18t = ?,f18 = ?,f19 = ?,f20t = ?,f20 = ?,f21 = ?,f22 = ?,f23 = ?
    WHERE f_id = ?`;

  const values: (string | number | Date | null)[] = [
    data.p0F1, // f1
    data.p0F2, // f2
    data.p0F3, // f3
    data.p0F4, // f4
    data.p0F5, // f5
    data.p0F6, // f6
    data.p0F7, // f7
    data.p0F8, // f8
    data.p0F9T, // f9t
    data.p0F9, // f9
    data.p0F10, // f10
    data.p0F11T, // f11t
    data.p0F11, // f11
    data.p0F12, // f12
    data.p0F13, // f13
    data.p0F14, // f14
    data.p0F15, // f15
    data.p0F16, // f16
    data.p0F17, // f17
    data.p0F18T, //f18t
    data.p0F18, //f18
    data.p0F19, //f19
    data.p0F20T, //f20t
    data.p0F20, //f20
    data.p0F21, //f21
    data.p0F22 + " " + data.p0F23 + ":00", //f22
    data.p0F22 + " " + data.p0F24 + ":00", //f23
    fId, //f_id
  ];
  
  try {
    const connection = await getDbConnection();
    await connection.query(sql, values);

    return true;
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};
