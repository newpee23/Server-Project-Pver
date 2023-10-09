import { getDbConnection } from "../config/dbconnect";
import { FormDataP0 } from "../types/pageType";

// insert master_complete
export const insertMasterComplete = async (data: FormDataP0, member_id: number, fId: string, page: string): Promise<string> => {
    const connection = await getDbConnection();

    const sql:string = `INSERT INTO master_complete (f_id, member_id, p0_user, p0_time, p1_user, p1_time, p3_user, p3_time, p4_user
        , p4_time, p5_user, p5_time, p6_user, p6_time, p7_user, p7_time, p8_user, p8_time, p9_user, p9_time, p10_user, p10_time, p11_user
        , p11_time, p12_user, p12_time, p13_user, p13_time, p14_user, p14_time, p15_user, p15_time, p16_user, p16_time, p17_user, p17_time
        , p18_user, p18_time) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


    // สร้างอาร์เรย์ของค่าจาก data: FormDataP0
    const values = [
        fId,
        member_id,
        data.p0F1,
        new Date(),
        data.p1_user,
        data.p1_time,
        data.p3_user,
        data.p3_time,
        data.p4_user,
        data.p4_time,
        data.p5_user,
        data.p5_time,
        data.p6_user,
        data.p6_time,
        data.p7_user,
        data.p7_time,
        data.p8_user,
        data.p8_time,
        data.p9_user,
        data.p9_time,
        data.p10_user,
        data.p10_time,
        data.p11_user,
        data.p11_time,
        data.p12_user,
        data.p12_time,
        data.p13_user,
        data.p13_time,
        data.p14_user,
        data.p14_time,
        data.p15_user,
        data.p15_time,
        data.p16_user,
        data.p16_time,
        data.p17_user,
        data.p17_time,
        data.p18_user,
        data.p18_time,
    ];
  
  const [rows, fields] = await connection.execute(sql, values);
  
    return '';
}