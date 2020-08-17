import { Component, OnInit } from '@angular/core';
import { UserService} from 'src/app/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
 
})
export class ActiveUsersComponent implements OnInit {

  users :string[];
  
  constructor(private userService :UserService) { }


  ngOnInit() {
    this.users =this.userService.inactiveUsers;
  }
  onSetToInactive(id:number)
  {
    this.userService.onSetToActive(id);
  }

  
}
