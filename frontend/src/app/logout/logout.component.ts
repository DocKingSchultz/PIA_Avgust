import { Component, OnInit } from '@angular/core';
import { Route, Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate(["login"])
  }

}
