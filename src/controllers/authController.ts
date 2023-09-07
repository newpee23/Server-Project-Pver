import { Request, Response } from "express"; // Import types for Request and Response
import bcrypt from "bcryptjs";
import { dataLogin, resLoginData, userInsertRegister, userRegister } from "../types/authType";
import { getDbConnection } from "../config/dbconnect";
import jwt from 'jsonwebtoken';

export const LoginUserApi = async (req: Request<dataLogin> , res: Response): Promise<void> => {
  try {

    const {m_username, m_password}: dataLogin = req.body;
    if(!m_username || !m_password){
      res.status(200).json({ message: "Please enter username and password." });
      return;
    }

    // Check LoginUser
    const userLogin = await findUserByLogin({m_username , m_password});
    if(userLogin.length === 0){
      res.status(200).json({ message: "Invalid username or password" });
      return;
    }

    // Generate Token
    const payload: resLoginData = {id: userLogin[0].m_id , fname: userLogin[0].m_fname , lname: userLogin[0].m_lname  , level: userLogin[0].m_level};
    jwt.sign(payload, 'jwtSecret' , {expiresIn: '8H'}, (err: Error | unknown, token: string | undefined) => {
      if (err) throw err;
      res.status(200).json({ token : token});
    });

    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}

export const registerApi = async (
  req: Request<userRegister>,
  res: Response
): Promise<void> => {
  try {
    const { m_username, m_password, m_fname, m_lname , m_idcard , m_email , m_phone , m_address}: userRegister = req.body;

    if (!m_username || !m_password || !m_fname || !m_lname|| !m_idcard || !m_email|| !m_phone || !m_address) {
      res.status(200).json({ message: "Invalid input data register" });
      return;
    }
    // Check username & IdCard & m_email
    try {
      const userData = await findUserByRegisters({
        m_username,
        m_idcard,
        m_email,
      });

      // ถ้าไม่มี userData ให้ บันทึกลง DB
      if (userData.length === 0) {
        try {
          // Encrypt Password
          const salt: string = await bcrypt.genSalt(10);
          const connection = await getDbConnection();
          // สร้างคำสั่ง SQL สำหรับแทรกข้อมูลในตาราง member
          const insertQuery =
            "INSERT INTO member (m_username, m_password, m_fname, m_lname, m_idcard, m_email, m_phone, m_address, m_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

          // รันคำสั่ง SQL INSERT
          await connection.query(insertQuery, [
            m_username,
            await bcrypt.hash(m_password, salt),
            m_fname,
            m_lname,
            m_idcard,
            m_email,
            m_phone,
            m_address,
            "m",
          ]);
          res.status(201).json({ message: "User registered successfully" });
        } catch (error: unknown) {
          console.error(error);
          res.status(500).json({ message: error });
        }
        return;
      }

      const firstUser = userData[0];
      if (m_username === firstUser.m_username) {
        res.status(200).json({ message: `Username : ${firstUser.m_username} is already in use` });
      } else if (m_idcard === firstUser.m_idcard) {
        res.status(200).json({ message: `IdCard : ${firstUser.m_idcard} is already in use` });
      } else if (m_email === firstUser.m_email) {
        res.status(200).json({ message: `Email : ${firstUser.m_email} is already in use` });
      } 
      return;
    
    } catch (error: unknown) {
      console.error(error);
      res.status(500).json({ message: error });
    }
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

export async function findUserByLogin({m_username, m_password}: dataLogin): Promise<userInsertRegister[]> {
 try {
  
    const connection = await getDbConnection();
    const query = "SELECT * FROM member WHERE m_username = ? ORDER BY m_id ASC LIMIT 1";

    const [results] = await connection.query<userInsertRegister[]>(query, [
      m_username,
    ]);

    const dataUser = results[0];
    if(dataUser.m_username){
        // Check Password
        const IsMatchPassword = await bcrypt.compare(m_password,dataUser.m_password);
        if(!IsMatchPassword){
            return [];
        }
    }
    return results;
  } catch (error: unknown) {
    // การจัดการข้อผิดพลาดเมื่อเกิดข้อผิดพลาดในการดำเนินการ
    console.error(error);
    throw new Error("Error processing user data" + error);
  }
}