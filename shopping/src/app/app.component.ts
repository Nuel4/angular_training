import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';
import { LoginService } from './login.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
  title = 'shopping';
 constructor(private authSerives :AuthService ,private logService :LoginService){}

  ngOnInit(){
    this.authSerives.authLogin();
    this.logService.printLog('Hello from AppComponent ngOninit')

  }
 
   
 // loadedFeature = 'recipe';  // from headerTemplate

 // onNavigate(feature :string)  //the type of value to be recieved
  //{
   // this.loadedFeature=feature;}

   
}
