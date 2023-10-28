import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StaffComponent } from './staff/staff.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports 



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
