import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private servisKorisnik: UserServiceService, private ruter: Router) { }

  ngOnInit(): void {
  }

  

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

}
