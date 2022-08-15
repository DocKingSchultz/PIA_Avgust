import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

declare function checkIfAllFieldsAreFilled(pass:string):boolean;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private servisKorisnik: UserServiceService, private ruter: Router) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  login(){
    if(checkIfAllFieldsAreFilled("loginForm")){
    this.servisKorisnik.adminLogin(this.username, this.password).subscribe((data: any)=>{
      if(!data){
        alert("Pogresno uneti podaci");
      }
      else{
        localStorage.setItem("user", JSON.stringify(data))
        this.ruter.navigate(['admin']);
      }
    })
  }
  }
  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
  }

}
