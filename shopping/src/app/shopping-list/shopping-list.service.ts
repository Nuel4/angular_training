import {EventEmitter} from '@angular/core';
import { Subject} from 'rxjs';
import {Ingredient } from '../shared/ingredient.model';
import { from } from 'rxjs';

export class ShoppingListService
{
    ingredientChanged =new Subject<Ingredient[]>();
    startedEditing =new Subject<number>();

    private ingredients : Ingredient [] =[
    new Ingredient('Apple' ,10),
    new Ingredient('Mango' ,15),
  ];

  getIngrdients()
  {
      return this.ingredients.slice();
  }

  getIngredient(index :number)
  {
    return this.ingredients[index];
  }
  
  addIngredient(ingredient :Ingredient)
  {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients :Ingredient[])
  {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());

  }

  updateIngredient(index :number ,newIngredient :Ingredient)
  {
    this.ingredients[index] =newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index :number)
  {
    this.ingredients.splice(index ,1);    //remove an item from the list
    this.ingredientChanged.next(this.ingredients.slice());

  }

}