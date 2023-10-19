import { getDbConnection } from "../config/dbconnect";
import { FormDataP0 } from "../types/pageType";

// insert master_complete
export const insertMasterComplete = async (member_id: number, fId: string, page: string): Promise<boolean> => {

    const sql: string = `INSERT INTO master_complete (id,f_id,member_id,p0_user,p0_time,p1_user,p1_time,p3_user,p3_time
        ,p4_user ,p4_time ,p5_user ,p5_time ,p6_user ,p6_time ,p7_user ,p7_time ,p8_user ,p8_time ,p9_user ,p9_time
        ,p10_user ,p10_time ,p11_user ,p11_time ,p12_user ,p12_time ,p13_user ,p13_time ,p14_user ,p14_time ,p15_user
        ,p15_time ,p16_user ,p16_time ,p17_user ,p17_time ,p18_user ,p18_time) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values: (string | number | Date | null)[] = [
        null, // id
        fId, // f_id
        member_id, // member_id
        page === "page0" ? member_id : null, // p0_user
        page === "page0" ? new Date() : null, // p0_time
        page === "page1" ? member_id : null, // p1_user
        page === "page1" ? new Date() : null, // p1_time
        page === "page3" ? member_id : null, // p3_user
        page === "page3" ? new Date() : null, // p3_time
        page === "page4" ? member_id : null, // p4_user
        page === "page4" ? new Date() : null, // p4_time
        page === "page5" ? member_id : null, // p5_user
        page === "page5" ? new Date() : null, // p5_time
        page === "page6" ? member_id : null, // p6_user
        page === "page6" ? new Date() : null, // p6_time
        page === "page7" ? member_id : null, // p7_user
        page === "page7" ? new Date() : null, // p7_time
        page === "page8" ? member_id : null, // p8_user
        page === "page8" ? new Date() : null, // p8_time
        page === "page9" ? member_id : null, // p9_user
        page === "page9" ? new Date() : null, // p9_time
        page === "page10" ? member_id : null, // p10_user
        page === "page10" ? new Date() : null, // p10_time
        page === "page11" ? member_id : null, // p11_user
        page === "page11" ? new Date() : null, // p11_time
        page === "page12" ? member_id : null, // p12_user
        page === "page12" ? new Date() : null, // p12_time
        page === "page13" ? member_id : null, // p13_user
        page === "page13" ? new Date() : null, // p13_time
        page === "page14" ? member_id : null, // p14_user
        page === "page14" ? new Date() : null, // p14_time
        page === "page15" ? member_id : null, // p15_user
        page === "page15" ? new Date() : null, // p15_time
        page === "page16" ? member_id : null, // p16_user
        page === "page16" ? new Date() : null, // p16_time
        page === "page17" ? member_id : null, // p17_user
        page === "page17" ? new Date() : null, // p17_time
        page === "page18" ? member_id : null, // p18_user
        page === "page18" ? new Date() : null, // p18_time
    ];

    try {
        const connection = getDbConnection();
        await connection.query(sql, values);
        
        return true;
    } catch (error: unknown) {
        console.log(error);
        return false;
    }
}

// insert page0
export const insertPage0 = async (data: FormDataP0, member_id: number, fId: string): Promise<boolean> => {

    const sql: string = `INSERT INTO page0 (id,f_id,f1,f2,f3,f4,f5,f6,f7,f8,f9t,f9,f10,f11t,f11,f12,f13,f14,f15,f16,f17,f18t,f18,f19,f20t,f20,f21,f22,f23) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values: (string | number | Date | null)[] = [
        null, // id
        fId, // f_id
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
        data.p0F22 + ' ' + data.p0F23+':00', //f22
        data.p0F22 + ' ' + data.p0F24+':00'  //f23

    ];

    try {
        const connection = getDbConnection();
        await connection.query(sql, values);
        
        return true;
    } catch (error: unknown) {
        console.log(error);
        return false;
    }
}
