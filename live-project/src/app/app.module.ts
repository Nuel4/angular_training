import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule } from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeptComponent } from './department/show-dept/show-dept.component';
import { EditDeptComponent } from './department/edit-dept/edit-dept.component';
import { AddDeptComponent } from './department/add-dept/add-dept.component';

import  { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service'; 
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDeptComponent,
    EditDeptComponent,
    AddDeptComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    DepartmentService,
    EmployeeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
