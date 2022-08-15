import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/users';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routr :Router, private servisKorisnik:UserServiceService) { }

  user:User

  ngOnInit(): void {
    var user = localStorage.getItem("user")    
    this.page = this.routr.url
    if(user!=null)
    {
      this.user = JSON.parse(user)      
      if(this.user.type=="moderator")this.routr.navigate["moderator"]
      else if(this.user.type=="reader")this.routr.navigate["reader"]
      else if(this.user.type=="admin")this.routr.navigate["admin"]
    }
    else 
    {
      this.routr.navigate["login"];
    }
  }

  page:string


  getUser()
  {
    var user = localStorage.getItem("user")    

  }
  logout()
  {
    localStorage.removeItem('user');
    localStorage.clear();
    this.page = this.routr.url
    this.routr.navigate(["login"])
  }

}
