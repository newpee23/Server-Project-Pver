import { Request, Response } from "express"; // Import types for Request and Response
import { getDbConnection } from "../config/dbconnect";
import { userInsertRegister } from "../types/authType";

export const getMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const member_id: string = req.params.member_id;

    // Connect DB
    const connection = await getDbConnection();
    if (!member_id) {
      //   member all
      const [rows] = await connection.query<userInsertRegister[]>(
        "SELECT * FROM member"
      );
      res.json(rows);
      return;
    }

    //  WHERE m_id จาก params
    const query = "SELECT * FROM member WHERE m_id = ? ORDER BY m_id ASC";
    const [results] = await connection.query<userInsertRegister[]>(query, [
      member_id,
    ]);

    // connection.end(); ยกเลิกการเชื่อมต่อ Database
    if (results.length === 0) {
      res.status(200).json({ message: "Member not found" });
      return;
    }

    res.json(results);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export async function findUserByRegisters({
  m_username,
  m_idcard,
  m_email,
}: {
  m_username: string;
  m_idcard: string;
  m_email: string;
}): Promise<userInsertRegister[]> {
  try {
    const connection = await getDbConnection();
    const query =
      "SELECT * FROM member WHERE m_username = ? OR m_idcard = ? OR m_email = ? ORDER BY m_id ASC LIMIT 1";
    const [results] = await connection.query<userInsertRegister[]>(query, [
      m_username,
      m_idcard,
      m_email,
    ]);
    return results;
  } catch (error: unknown) {
    // การจัดการข้อผิดพลาดเมื่อเกิดข้อผิดพลาดในการดำเนินการ
    console.error(error);
    throw new Error("Error processing user data" + error);
  }
}
