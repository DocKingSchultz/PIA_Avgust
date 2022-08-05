import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  user:User

  ngOnInit(): void {
    this.getUser()
  }




  getUser()
  {
    var user = localStorage.getItem("user")    
    if(user!=null)
    {
      this.user = JSON.parse(user)      
    }
  }
  logout()
  {
    localStorage.removeItem('user');
    localStorage.clear();
  }
}
