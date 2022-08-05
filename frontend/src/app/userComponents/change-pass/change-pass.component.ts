import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  oldPass:string;
  newPass:string;
  newPassConfirmed:string;

  changePassword(){
    let user = localStorage.getItem('user');
    var userJson; 
    if(user!=null)userJson = JSON.parse(user);
  }
}
