import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { findMemberById } from '../controllers/userController';

export const checkRequestToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token: string | undefined = Array.isArray(req.headers["token-request"]) ? req.headers["token-request"][0] : req.headers["token-request"];
        console.log(token)
        if (token === undefined) {
            res.status(401).send('No Token, Authorization Denied');
            return;
        }
        if (!process.env.JWT_SECRET) {
            res.status(401).json("Error Server : Please restart server");
            return
          }
        const decode = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;
  
        // console.log("middleware" , decode);
        if(decode){
            const checkUser = await findMemberById(decode.id);
            if(checkUser.length === 0){
                res.status(401).send('No Token, Authorization Denied');
                return;
            }  
            next();    
        }
   
    } catch (error : unknown) {
        console.log(error);
        res.status(401).send('No Token, Authorization Denied');
        return;
    }
};