import { Request, Response } from "express";
import { BanData, QuestionnaireDataStatus } from "../types/findDataType";
import { getDbConnection } from "../config/dbconnect";


export const getQuestionnaireApi = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const f_id: string = req.params.f_id;
    const member_id: number = parseInt(req.params.member_id);

    // Check จำนวน f_id
    const numberOfCharacters: number = f_id.length;
    if (numberOfCharacters !== 5) {
      res.status(200).json({ message: `กรุณากรอกรหัสแบบสอบถาม 5 หลัก` });
      return;
    }

    // Check questionnaire Data
    const masterComplete = await findQuestionnaireData(f_id, member_id);
   
    if(masterComplete === null){
      res.status(200).json({ message: `เกิดข้อผิดพลาดในการประมวลผลคำขอ` });
      return;
    }
    if (masterComplete.length === 0) {
      res.status(200).json({ masterComplete });
      return;
    }
    
    // Check ว่าคนเรียกข้อมูลเป็นคนบันทึกแบบสอบถามหรือไม่
    // const p0_u: string = masterComplete[0].p0_u.replace(/\D/g, "");
    const queryFid: number = masterComplete[0].member_id;
    if (member_id !== queryFid) {
      res.status(200).json({ message: `คุณไม่สามารถเข้าถึงแบบสอบถาม ${f_id} นี้ได้` });
      return;
    }

    res.status(200).json(masterComplete);
    return;
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const findQuestionnaireData = async (f_id: string, member_id: number): Promise<QuestionnaireDataStatus[] | null> => {
  try {
    const connection = getDbConnection();
    const query = `SELECT master_complete.*
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p0_user = member.m_id),null) AS p0_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p1_user = member.m_id),null) AS p1_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p3_user = member.m_id),null) AS p3_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p4_user = member.m_id),null) AS p4_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p5_user = member.m_id),null) AS p5_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p6_user = member.m_id),null) AS p6_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p7_user = member.m_id),null) AS p7_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p8_user = member.m_id),null) AS p8_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p9_user = member.m_id),null) AS p9_user_name 
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p10_user = member.m_id),null) AS p10_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p11_user = member.m_id),null) AS p12_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p13_user = member.m_id),null) AS p13_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p14_user = member.m_id),null) AS p14_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p15_user = member.m_id),null) AS p15_user_name    
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p16_user = member.m_id),null) AS p16_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p17_user = member.m_id),null) AS p17_user_name
    , IFNULL((SELECT CONCAT(m_fname,' ',m_lname) FROM member WHERE master_complete.p18_user = member.m_id),null) AS p18_user_name      
    FROM master_complete WHERE f_id = ? AND member_id = ? ORDER BY id ASC`;

    const [results] = await connection.query<QuestionnaireDataStatus[]>(query, [f_id, member_id]);
    // console.log(results);
    
    return results;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};

export const getBanApi = async (req: Request,res: Response): Promise<void> => {
  try {
   const data:BanData[] | null = await findBanData();

   if(data === null){
    res.status(200).json({ message: `การประมวลผลผิดพลาดกรุณาลองอีกครั้ง` });
    return;
   }
   res.status(200).json(data);
   return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const findBanData = async (): Promise<BanData[] | null> => {
  try {
    const connection = getDbConnection();
    const query = `SELECT ban.code AS id , ban.ban, ban.mo , ban.tambon_code , ban.ampher_code , ban.province_code
    ,(SELECT tambon.tambon FROM tambon WHERE ban.tambon_code = tambon.code) AS tombonName
    ,(SELECT ampher.ampher FROM ampher WHERE ban.ampher_code = ampher.code) AS ampherName
    ,(SELECT province.province FROM province WHERE ban.province_code = province.code) AS provinceName
    ,CONCAT(ban,' (',(SELECT province.province FROM province WHERE ban.province_code = province.code),') ') AS  banProvince
    FROM ban
    ORDER BY id ASC`;

    const [results] = await connection.query<BanData[]>(query);

    // console.log(results);
    return results;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};
