import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { AdminComponent } from './adminComponents/admin/admin.component';
import { RedirectAdminComponent } from './adminComponents/redirect-admin/redirect-admin.component';
import { RegistrationRequestsComponent } from './adminComponents/registration-requests/registration-requests.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { ReaderComponent } from './reader/reader.component';
import { DataTableComponent } from './testComponents/data-table/data-table.component';
import { ChangePassComponent } from './userComponents/change-pass/change-pass.component';
import { RegistrationComponent } from './userComponents/registration/registration.component';
import { SignInComponent } from './userComponents/sign-in/sign-in.component';

const routes: Routes = 
[
  {path: "", component: SignInComponent},
  {path: "login", component: SignInComponent},
  {path: "signIn", component: SignInComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "admin", component: AdminComponent},
  {path: "changePass", component: ChangePassComponent},
  {path:"dataTable", component:DataTableComponent},
  {path:"logout", component:LogoutComponent},
  {path:"reader", component:ReaderComponent},
  {path:"moderator", component:ModeratorComponent},
  {path: "OSYYAKJMuLDErQIhOJsqmCMDFfKJr2xl5pxrBXID", component: AdminLoginComponent},
  {path: "header", component: HeaderComponent},
  {path: "homeBookSearch", component: HeaderComponent},
  {path: "bestBooks", component: HeaderComponent},
  {path: "registrationRequests", component: RegistrationRequestsComponent}, 
  {path: '**', component: RedirectAdminComponent } //ako ruta ne postoji, vrati na PrijavaComponent

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
