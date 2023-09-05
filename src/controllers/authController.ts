import { Request, Response } from "express"; // Import types for Request and Response
import { getDbConnection } from "../config/dbconnect";
import { RowDataPacket } from "mysql2"; // RowDataPacket เป็น interface ที่ใช้ในการระบุโครงสร้างของข้อมูลที่ส่งกลับจากฐานข้อมูล
export const getMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const member_id: string = req.params.member_id;

    // Connect DB
    const connection = await getDbConnection();
    if (!member_id) {
      //  WHERE m_id จาก params
      const [rows] = await connection.query<RowDataPacket[]>("SELECT * FROM member");
      res.json(rows);
      return;
    }

    //  member all
    const query = "SELECT * FROM member WHERE m_id = ? ORDER BY m_id ASC";
    const [results] = await connection.query<RowDataPacket[]>(query, [member_id,]);

    // connection.end(); ยกเลิกการเชื่อมต่อ Database
    if (results.length === 0) {
      res.status(200).send("Member not found");
      return;
    }

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error : " + error);
  }
};
