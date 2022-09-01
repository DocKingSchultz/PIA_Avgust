import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { RegReq } from 'src/models/regReq';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  constructor(private routr:Router, private servisKorisnik: UserServiceService) {
   }

  ngOnInit(): void {
    this.servisKorisnik.getAllRegReqs().subscribe((reqs:any)=>{
      this.regReqs=reqs;
    })
  }

  regReqs : RegReq[];

  generateToken() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let length = 10
    var result = '';
    var user = localStorage.getItem("user")
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    if (user != null) {
      this.servisKorisnik.createNewToken(result,JSON.parse(user).username).subscribe((mess: any) => {
        if (mess) {
          alert("Your new generated key is :" + result)
        }
        else {
          alert("Key cant be generated in this moment :")
        }
      })
    }

  }

  changeAccStatus(req:RegReq, status:string)
  {
    this.servisKorisnik.changeAccStatus(req, status).subscribe((mss:any)=>{
      window.location.reload()
    });
    
    
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
  }

}
