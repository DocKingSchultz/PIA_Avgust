import e, * as express from 'express';
import User from '../models/users';

export class userController
{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let user = new User();


    }
}