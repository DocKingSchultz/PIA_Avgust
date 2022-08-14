import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './userComponents/sign-in/sign-in.component';
import { RegistrationComponent } from './userComponents/registration/registration.component';
import { ChangePassComponent } from './userComponents/change-pass/change-pass.component';
import { AdminComponent } from './adminComponents/admin/admin.component';
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
import { ReaderComponent } from './reader/reader.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { RedirectAdminComponent } from './adminComponents/redirect-admin/redirect-admin.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { HomeBookSearchComponent } from './home-book-search/home-book-search.component';
import { BestBooksComponent } from './best-books/best-books.component';
import { RegistrationRequestsComponent } from './adminComponents/registration-requests/registration-requests.component';

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
    LogoutComponent,
    ReaderComponent,
    ModeratorComponent,
    RedirectAdminComponent,
    AdminLoginComponent,
    HomeBookSearchComponent,
    BestBooksComponent,
    RegistrationRequestsComponent
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
