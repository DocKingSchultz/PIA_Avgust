import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { RegReq } from 'src/models/regReq';

declare function checkPasswordMatching(pass:string, confpass:string):boolean;
declare function checkIfAllFieldsAreFilled(formName:string):boolean;
declare function checkPasswordRegularity(password:string):boolean;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userServ: UserServiceService, private ruter: Router) { }

  ngOnInit(): void {
  }
  
  req:RegReq = new RegReq();

  registration()
  {
    if(checkIfAllFieldsAreFilled("registerForm") 
    && checkPasswordRegularity(this.req.password)
    && checkPasswordMatching(this.req.password, this.req.passwordConfirmed)){
           
     this.userServ.regitration(this.req).subscribe((mess:any)=>{
           alert(mess['message'])
     })
     this.ruter.navigate[""]
   }
   
 }
    
  }

