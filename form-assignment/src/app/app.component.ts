import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form-assignment';

  projectForm :FormGroup;


ngOnInit(){
  this.projectForm= new FormGroup({
    'projectName':new FormControl(null ,[Validators.required, 
      CustomValidators.invalidProjectName] , CustomValidators.asyncInvalidProjectName),
    'email':new FormControl(null ,[Validators.required ,Validators.email]),
    'projectStatus': new FormControl('critical')
  });
}

onSaveProject()
{
  console.log(this.projectForm.value);

}
  
}
