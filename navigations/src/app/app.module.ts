import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule ,routingComponents}  from './app-routing.module';


import { AppComponent } from './app.component';

//import {DepartmentListComponent} from './department-list/department-list.component';
//import {EmployeeListComponent } from './employee-list/employee-list.component';


//import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //DepartmentListComponent, 
    //EmployeeListComponent,
    routingComponents,   //serves as both departmentlist and employeementlist import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

