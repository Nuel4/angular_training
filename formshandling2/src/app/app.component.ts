import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
//import { rejects } from 'assert';
//import { setTimeout } from 'timers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formshandling2';

  genders =['male','female'];
  forbiddenUsername= ['Chris' ,'Anna']

  signupForm :FormGroup;

  ngOnInit()
  {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'username' :new FormControl(null,[Validators.required ,this.forbiddenNames.bind(this)]) ,
        'email' :new FormControl(null ,[Validators.required ,Validators.email] ,
          this.forbiddenEmails.bind),  
      }),

      'gender': new FormControl('male'),
      'hobbies' :new FormArray([]),
    });
  }
  onSubmit()
  {
    console.log(this.signupForm);
  }
  onAddHobby()
  {
    const control =new FormControl(null ,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);

  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control :FormControl):{[s: string] :boolean}
  {
    if(this.forbiddenUsername.indexOf(control.value))
    {
      return {'nameIsForbidden':true}
    }
    return null;

  }

  forbiddenEmails(control:FormControl):Promise<any> | Observable<any>
  {
    const promise =new Promise<any>((resolve ,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden' :true})
        }
        else{
          resolve(null);
        }
      },1500)
    });
    return promise;
  }
}
