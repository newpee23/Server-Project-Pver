import { RowDataPacket } from "mysql2"; // RowDataPacket เป็น interface ที่ใช้ในการระบุโครงสร้างของข้อมูลที่ส่งกลับจากฐานข้อมูล

export type userRegister = {
    m_username: string;
    m_password: string;
    m_fname: string;
    m_lname: string;
    m_idcard: string;
    m_email : string;
    m_phone : string;
    m_address : string;
    m_level : string;
}

export interface userInsertRegister extends RowDataPacket {
    m_id : number;
    m_username: string;
    m_password: string;
    m_fname: string;
    m_lname: string;
    m_idcard: string;
    m_email : string;
    m_phone : string;
    m_address : string;
    m_level : string;
}

export type dataLogin = {
    m_username: string;
    m_password: string;
}

export type resLoginData = {
    id: number;
    fname: string;
    lname: string;
    level : string;
}