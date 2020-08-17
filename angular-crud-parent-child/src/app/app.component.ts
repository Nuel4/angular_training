import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-parent-child';
  
  constructor(private commonService :CommonService){}

  addUser(userForm){
    console.log(userForm.value);
    //console.log(userForm);
    let obj =userForm.value;
    obj.id = 1;
    this.commonService.createUser(obj)
  }
}
