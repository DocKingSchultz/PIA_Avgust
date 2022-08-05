import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { DataTableComponent } from './testComponents/data-table/data-table.component';
import { ChangePassComponent } from './userComponents/change-pass/change-pass.component';
import { RegistrationComponent } from './userComponents/registration/registration.component';
import { SignInComponent } from './userComponents/sign-in/sign-in.component';

const routes: Routes = 
[
  {path: "", component: SignInComponent},
  {path: "login", component: SignInComponent},
  {path: "signIn", component: SignInComponent},
  {path: "register", component: RegistrationComponent},
  {path: "admin", component: AdminComponent},
  {path: "changePass", component: ChangePassComponent},
  {path:"dataTable", component:DataTableComponent},
  {path:"logout", component:LogoutComponent},
  {path:"**", component:SignInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
