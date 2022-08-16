import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegReq } from 'src/models/regReq';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  
  login(username:string, password:string){
    const data = {
      username:username,
      password:password
    }
    return this.http.post(`${this.uri}/login`, data);
  }

  checkAdminKey(key:string)
  {
    let data = {
      "key":key
    }
    return this.http.post(`${this.uri}/checkAdminKey`, data);
  }

  adminLogin(username:string, password:string){
    const data = {
      username:username,
      password:password
    }
    return this.http.post(`${this.uri}/adminLogin`, data);
  }

  createNewToken(key:string, username:string)
  {
    let data = {
      "creator":username,
      "key":key
    }
    return this.http.post(`${this.uri}/createNewToken`, data);
  }

  changePassword(username:string, password:string)
  {
    const data = {
      username:username,
      password:password
    }
    return this.http.post(`${this.uri}/changePassword`, data);
  }

  regitration(req:RegReq)
  {
    return this.http.post(`${this.uri}/makeRegistrationRequest`, req);
  }

  getAllRegReqs() {
    const data = {

    }
    return this.http.post(`${this.uri}/getAllRegistrationRequests`,data)
  }

  changeAccStatus(req:RegReq, status:string)
  {
    const data = {
      req:req,
      status:status
    }
    return this.http.post(`${this.uri}/changeAccStatus`,data)
  }

}
