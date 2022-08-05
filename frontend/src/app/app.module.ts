import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './userComponents/sign-in/sign-in.component';
import { RegistrationComponent } from './userComponents/registration/registration.component';
import { ChangePassComponent } from './userComponents/change-pass/change-pass.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './testComponents/form/form.component';
import { DataTableComponent } from './testComponents/data-table/data-table.component';
import { SearchtableComponent } from './testComponents/searchtable/searchtable.component';
import { MultipleTabsComponentComponent } from './testComponents/multiple-tabs-component/multiple-tabs-component.component';
import { PaginationDataTableComponent } from './testComponents/pagination-data-table/pagination-data-table.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegistrationComponent,
    ChangePassComponent,
    AdminComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    DataTableComponent,
    SearchtableComponent,
    MultipleTabsComponentComponent,
    PaginationDataTableComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
