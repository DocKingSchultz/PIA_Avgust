import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-redirect-admin',
  templateUrl: './redirect-admin.component.html',
  styleUrls: ['./redirect-admin.component.css']
})
export class RedirectAdminComponent implements OnInit {

  constructor(private ruter: Router, private servisKorisnik: UserServiceService) { }

  ngOnInit(): void {
    let key = this.ruter.url.substring(1)
    this.servisKorisnik.checkAdminKey(key).subscribe((kres:any)=>{
      if(kres)
      {
        this.ruter.navigate(['/OSYYAKJMuLDErQIhOJsqmCMDFfKJr2xl5pxrBXID'])
      }
      else
      {
        this.ruter.navigate([''])
      }
    })
  }

}
