import { Request, Response } from "express"; // Import types for Request and Response
import { getDbConnection } from "../config/dbconnect";
import { userInsertRegister } from "../types/authType";


export const getMemberApi = async (req: Request, res: Response): Promise<void> => {
  try {
    const member_id: string = req.params.member_id;

    // Connect DB
    const connection = getDbConnection();
    if (!member_id) {
      //   member all
      const [rows] = await connection.query<userInsertRegister[]>(
        "SELECT * FROM member"
      );
      connection.end();
      res.json(rows);
      return;
    }

    //  WHERE m_id จาก params
    const query = "SELECT * FROM member WHERE m_id = ? ORDER BY m_id ASC";
    const [results] = await connection.query<userInsertRegister[]>(query, [
      member_id,
    ]);
    connection.end();
    
    if (results.length === 0) {
      res.status(200).json({ message: "Member not found" });
      return;
    }

    res.json(results);
    return;
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const findMemberById = async (id: number = 0): Promise<userInsertRegister[]> => {
  try {
    const member_id: number = id;
    // Connect DB
    const connection = getDbConnection();
    if(member_id === 0){
       //   member all
       const [rows] = await connection.query<userInsertRegister[]>(
        "SELECT * FROM member"
      );
      
;    return rows;
    }
    //  WHERE member_id 
    const query = "SELECT * FROM member WHERE m_id = ? ORDER BY m_id ASC";
    const [results] = await connection.query<userInsertRegister[]>(query, [
      member_id,
    ]);
    
    return results;

  } catch (error: unknown) {
    console.error(error);
    // throw new Error("Error processing user data" + error);
    return [];
  }
};

