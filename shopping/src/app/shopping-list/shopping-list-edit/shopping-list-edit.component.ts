import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

  // ElementRef, ViewChild  from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
//import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListAction from '../store/shopping-list.actions';

import * as fromApp from '../../store/app.reducer';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit ,OnDestroy {
@ViewChild('f') slForm :NgForm;
  suubscription :Subscription;
 editMode =false;
 editedItemIndex :number;
 editedItem :Ingredient;

  constructor(
   // private slService :ShoppingListService ,
    private store :Store<fromApp.AppState>) { }

  ngOnInit() {
   //this.suubscription= this.slService.startedEditing.subscribe(
     (index :number)=>{
      this.editedItemIndex =index;
       this.editMode=true;
     //  this.editedItem =this.slService.getIngredient(index);

       this.slForm.setValue({
         name :this.editedItem.name,
         amount :this.editedItem.amount
       });

     }
   //);
  }
  onSubmit(form :NgForm)
  {
    
    const value = form.value;
    const newIngredient =new Ingredient(value.name , value.amount);
    
    if(this.editMode)
    {
      this.store.dispatch(new ShoppingListAction.UpdateIngredient({index :this.editedItemIndex , ingredient :newIngredient}))
      //this.slService.updateIngredient(this.editedItemIndex , newIngredient);
    }
    else
    {
      //this.slService.addIngredient(newIngredient);

      this.store.dispatch( new ShoppingListAction.AddIngredient(newIngredient))

    } 
    this.editMode=false;
    form.reset();
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete()
  {
    //this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListAction.DeleteIngredient(this.editedItemIndex))
    this.onClear();

  }

  ngOnDestroy(){
    this.suubscription.unsubscribe();
  }

}
