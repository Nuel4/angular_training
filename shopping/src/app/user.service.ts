import {Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService
{
    activeUsers =['Hannah' ,'Michael' ,'Mark'];
  inactiveUsers =['Sofiat' ,'Fortune' ,'Rachael'];

  constructor(private counterService :CounterService)
  {

  }

  onSetToActive(id :number)
  {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id ,1);
      this.counterService.increamentInactiveToActive();
  }

  onSetToInactive(id:number)
  {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id ,1);
      this.counterService.increamentActiveToInactive();
  }

}