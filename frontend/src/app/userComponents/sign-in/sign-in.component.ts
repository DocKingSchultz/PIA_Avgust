import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

declare function checkIfAllFieldsAreFilled(pass:string):boolean;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private serv:UserServiceService, private ruter:Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  username:string
  password:string
  poruka: string;
  
  login()
  {
    if(checkIfAllFieldsAreFilled("loginForm"))
    {
      this.serv.login(this.username, this.password).subscribe((data:any)=>{
        if(!data){
          alert("Pogresno uneti podaci");
        }
        else{
          if(data.type=="reader"){
            alert(data)
            localStorage.setItem("user", JSON.stringify(data))
            this.ruter.navigate(['header']);
          }
          else if(data.type=="moderator"){
            alert(data)
            localStorage.setItem("user", JSON.stringify(data))
            this.ruter.navigate(['header']);
          }
          
        }
      })
    }
    
  }

}
