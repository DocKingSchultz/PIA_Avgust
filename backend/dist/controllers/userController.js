"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const tokens_1 = __importDefault(require("../models/tokens"));
const moderator_1 = __importDefault(require("../models/moderator"));
const reader_1 = __importDefault(require("../models/reader"));
const users_1 = __importDefault(require("../models/users"));
const admin_1 = __importDefault(require("../models/admin"));
const regreq_1 = __importDefault(require("../models/regreq"));
class userController {
    constructor() {
        this.getAllRegistrationRequests = (req, res) => {
            regreq_1.default.find({}, (err, reqs) => {
                if (err)
                    console.log("getting reg requests error :" + err);
                else {
                    res.json(reqs);
                }
            });
        };
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let user = new users_1.default();
            moderator_1.default.findOne({ 'username': username, 'password': password }, (err, mod) => {
                if (!mod) {
                    reader_1.default.findOne({ 'username': username, 'password': password }, (err, reader) => {
                        if (reader) {
                            user.type = reader.type;
                            user.username = reader.username;
                            user.password = reader.password;
                            res.json(reader);
                        }
                        else {
                            console.log("not raeder");
                            res.json(null);
                        }
                    });
                }
                else {
                    user.type = mod.type;
                    user.username = mod.username;
                    user.password = mod.password;
                    res.json(mod);
                }
            });
        };
        this.checkAdminKey = (req, res) => {
            console.log(req.body.key);
            tokens_1.default.findOne({ "key": req.body.key }, (err, qres) => {
                if (err) {
                    console.log(err);
                    console.log("nevedeni key ne postoji");
                    res.json(null);
                }
                else if (!qres) {
                    res.json(null);
                }
                else {
                    res.json(qres);
                }
            });
        };
        this.createNewToken = (req, res) => {
            console.log("uleteo");
            let tok = new tokens_1.default(req.body);
            tok.save().then(reqres => {
                res.json(reqres);
            });
        };
        this.adminLogin = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let user = new users_1.default();
            admin_1.default.findOne({ 'username': username, 'password': password }, (err, admin) => {
                if (admin) {
                    user.type = admin.type;
                    user.username = admin.username;
                    user.password = admin.password;
                    res.json(user);
                }
                else
                    res.json({ "message": "pogresno uneti podaci" });
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            console.log(username + " " + password);
            admin_1.default.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
                if (data)
                    res.json(data);
                else {
                    moderator_1.default.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
                        if (data)
                            res.json(data);
                        else {
                            reader_1.default.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
                                if (data)
                                    res.json(data);
                                else {
                                    res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu");
                                }
                            }).clone();
                        }
                    }).clone();
                }
            }).clone();
        };
        this.makeRegistrationRequest = (req, res) => {
            let regReq = new regreq_1.default(req.body);
            let username = req.body.username;
            regreq_1.default.findOne({ username: username }, (err, alreadyExistsComp) => {
                if (!alreadyExistsComp) {
                    admin_1.default.findOne({ username: username }, (err, alreadyExistsAdmin) => {
                        if (!alreadyExistsAdmin) {
                            moderator_1.default.findOne({ username: username }, (err, alreadyExistsModerator) => {
                                if (!alreadyExistsModerator) {
                                    reader_1.default.findOne({ username: username }, (err, alreadyExistsReader) => {
                                        if (!alreadyExistsReader) {
                                            regReq.save().then(regReq => {
                                                res.status(200).json({ 'message': 'Zahtev za registracijom uspesno kreiran' });
                                            }).catch(err => {
                                                console.log(err);
                                                res.status(400).json({ 'message': 'error' });
                                            });
                                        }
                                        else
                                            res.json({ 'message': 'Korisnik sa unetim podacima vec postoji u sistemu' });
                                    });
                                }
                                else
                                    res.json({ 'message': 'Korisnik sa unetim podacima vec postoji u sistemu' });
                            });
                        }
                        else
                            res.json({ 'message': 'Korisnik sa unetim podacima vec postoji u sistemu' });
                    });
                }
                else
                    res.json({ 'message': 'Korisnik sa unetim podacima vec postoji u sistemu' });
            });
        };
        this.changeAccStatus = (req, res) => {
            let regReq = req.body.req;
            let username = regReq.username;
            let status = req.body.status;
            regreq_1.default.findOneAndUpdate({ "username": username }, { "status": status }, (err, res) => {
                if (err)
                    throw (err);
                else {
                    reader_1.default.findOne({ "username": username }, (err, res) => {
                        if (err)
                            throw (err);
                        else {
                            if (res) {
                                reader_1.default.deleteOne({ "username": username }, (err) => {
                                }).clone().catch(err => {
                                    if (err) {
                                        console.log("Greska pri deaktiviranju naloga Citaoca Admin/changeAccStatus : " + err);
                                    }
                                });
                            }
                            else {
                                let comp = new reader_1.default(regReq);
                                comp.status = status;
                                if (status == 'aktivan') {
                                    comp.save(function (err) {
                                        if (err)
                                            throw (err);
                                    });
                                }
                            }
                        }
                    });
                }
            });
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map