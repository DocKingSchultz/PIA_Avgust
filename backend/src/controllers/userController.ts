import e, * as express from 'express';
import Token from '../models/tokens';
import Moderator from '../models/moderator';
import Reader from '../models/reader';
import User from '../models/users';
import Admin from '../models/admin';
import RegReq from '../models/regreq';
import { Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class userController
{
    getAllRegistrationRequests = (req: express.Request, res: express.Response) => {
        RegReq.find({}, (err, reqs) => {
            if (err) console.log("getting reg requests error :" + err)
            else {
                res.json(reqs)
            }
        })
    }
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let user = new User();
        Moderator.findOne({'username':username, 'password': password}, (err, mod)=>
        {
            if(!mod)
            {
                 Reader.findOne({'username':username, 'password': password}, (err, reader)=>
                {
                        if(reader)
                        {
                           user.type=reader.type;
                           user.username=reader.username;
                           user.password=reader.password;
                           res.json(reader);     
                        }
                       else {
                        console.log("not raeder")
                        res.json(null);   
                    }
                })
            }
            else 
            {
                user.type=mod.type;
                user.username=mod.username;
                user.password=mod.password;
                res.json(mod);     
            }   
        })
    }

    checkAdminKey= (req: express.Request, res: express.Response)=>
    {
        console.log(req.body.key)
        Token.findOne({"key":req.body.key}, (err, qres)=>{
            if(err)
            {
                console.log(err)
                console.log("nevedeni key ne postoji")
                res.json(null)
            }
            else if(!qres)
            {
                res.json(null)
           }
           else {
            res.json(qres)
           }
        })
    }

    createNewToken= (req: express.Request, res: express.Response)=>
    {
        console.log("uleteo")
        let tok = new Token(req.body)
        
        tok.save().then(reqres=>{
            res.json(reqres)
        })
    }

    adminLogin = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let user = new User();
        Admin.findOne({'username':username, 'password': password}, (err, admin)=>
        {
            if(admin)
            {
                user.type=admin.type;
                user.username=admin.username;
                user.password=admin.password;
                res.json(user);     

            }
            else res.json({"message":"pogresno uneti podaci"})
        })

    }

    changePassword= (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        console.log(username + " " + password)
        Admin.findOneAndUpdate({"username":username}, {"password": password}, (err, data)=>{
            if(data)res.json(data);
            else
            {
                Moderator.findOneAndUpdate({"username":username}, {"password": password}, (err, data)=>{
                    if(data)res.json(data);
                    else 
                    {
                        Reader.findOneAndUpdate({"username":username}, {"password": password}, (err, data)=>{
                            if(data)res.json(data);
                            else 
                            {
                                res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu")
                            }
                         }).clone()
                    }
                 }).clone()
            }
         }).clone()
    }

    makeRegistrationRequest= (req: express.Request, res: express.Response)=>{
        let regReq = new RegReq(req.body); 
        let username =req.body.username;
        RegReq.findOne({username:username}, (err, alreadyExistsComp)=>
        {
            if(!alreadyExistsComp)
            {
                Admin.findOne({username:username}, (err, alreadyExistsAdmin)=>
                {
                    if(!alreadyExistsAdmin)
                    {
                        Moderator.findOne({username:username}, (err, alreadyExistsModerator)=>
                        {
                            if(!alreadyExistsModerator)
                            {
                                 Reader.findOne({username:username}, (err, alreadyExistsReader)=>
                                {
                                        if(!alreadyExistsReader)
                                        {
                                            regReq.save().then(regReq=>{
                                                res.status(200).json({'message': 'Zahtev za registracijom uspesno kreiran'});
                                            }).catch(err=>{
                                                console.log(err);
                                                res.status(400).json({'message': 'error'})
                                            })
                                            
                                        }else res.json({'message':'Korisnik sa unetim podacima vec postoji u sistemu'})
                                })
                            }else res.json({'message':'Korisnik sa unetim podacima vec postoji u sistemu'})
                        })
                    }else res.json({'message':'Korisnik sa unetim podacima vec postoji u sistemu'})
                })
            }else res.json({'message':'Korisnik sa unetim podacima vec postoji u sistemu'})
        })
        
    }

    changeAccStatus = (req: express.Request, res: express.Response) => {
        let regReq = req.body.req;
        let username = regReq.username
        let status = req.body.status;
        RegReq.findOneAndUpdate({ "username": username }, { "status": status }, (err, res) => {
            if(err)throw(err)
            else {
                Reader.findOne({ "username": username }, (err, res) => {

                    if(err)throw(err)
                    else {
                        if (res) {

                            Reader.deleteOne({ "username": username }, (err) => {

                            }).clone().catch(err => {
                                if (err) {
                                    console.log("Greska pri deaktiviranju naloga Citaoca Admin/changeAccStatus : " + err)
                                }
                            });

                        }
                        else {
                            let comp = new Reader(regReq)
                            comp.status = status;
                            if (status == 'aktivan') {
                                comp.save(function (err) {
                                    if(err)throw(err)
                                });
                            }


                        }
                    }
                });

            }
        });

    }
    
}