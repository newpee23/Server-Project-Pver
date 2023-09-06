import { Request, Response } from "express"; // Import types for Request and Response
import bcrypt from "bcryptjs";
import { userRegister } from "../types/authType";
import { findUserByRegisters } from "./userController";
import { getDbConnection } from "../config/dbconnect";

export const register = async (
  req: Request<userRegister>,
  res: Response
): Promise<void> => {
  try {
    const { m_username, m_password, m_fname, m_lname , m_idcard , m_email , m_phone , m_address}: userRegister = req.body;

    if (!m_username || !m_password || !m_fname || !m_lname|| !m_idcard || !m_email|| !m_phone || !m_address) {
      res.status(200).json({ message: "Invalid input data register" });
      return;
    }
    // Check username & IdCard
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
      res.status(200).json({
          message: `Username : ${firstUser.m_username} or IdCard : ${firstUser.m_idcard} or Email : ${firstUser.m_email} is already in use`,
      });
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
