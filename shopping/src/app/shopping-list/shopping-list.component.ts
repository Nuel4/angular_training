import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
//import { ShoppingListService } from './shopping-list.service';
import { LoginService } from '../login.service';
import { Store } from '@ngrx/store';

import * as ShoppingListAction from './store/shopping-list.actions';

import * as fromApp from '../store/app.reducer';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit  ,OnDestroy
{
  ingredients :Observable<{ ingredients : Ingredient[] }>;
  private igChangeSub  :Subscription

  constructor(
    //private slService :ShoppingListService ,
    private loginService :LoginService ,
    private store :Store<fromApp.AppState>) { }

  ngOnInit() {
    this.ingredients =this.store.select('shoppingList')

    //this.ingredients =this.slService.getIngrdients();
   // this.igChangeSub= this.slService.ingredientChanged.subscribe((
    //  ingredients :Ingredient[]) =>{
      //this.ingredients =ingredients ; });

      this.loginService.printLog('Hello from ShoppingListComponent ngOninit')
  }
  onEditItem(index :number)
  {
    //this.slService.startedEditing.next(index);

  }
  ngOnDestroy()
  {
    //this.igChangeSub.unsubscribe();

  }
 

}
