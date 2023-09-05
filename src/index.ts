import express, { Express , Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { getDbConnection } from './config/dbconnect';

// Config
dotenv.config({ path: path.resolve(__dirname, './.env') });
const app: Express = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5050;
const routesPath: string = path.join(__dirname, './routes'); // กำหนดพาธเต็มของไดเรกทอรี routes

// middleware
app.use(morgan('dev')); //ดู log เรียก Api
app.use(bodyParser.json({limit:'20mb'})); // จำกัดขนาดข้อมูลที่ยิงมาจากหน้าบ้าน
app.use(cors()); //จัดการการดึง Api ไปใช้

// Connect DB
getDbConnection();

// Route กำหนด path ของ routes อัตโนมัติ
fs.readdirSync(routesPath).map((r: string) => app.use('/api', require(path.join(routesPath, r))));

fs.readdirSync(routesPath).map((r: string) => console.log(r));
app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
});