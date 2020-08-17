import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'; 
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService
{
  recipeChanged =new Subject<Recipe[]>();
 
//private recipes :Recipe[] =[
      //  new Recipe('A Test Recipe' ,
       // 'This is a simple Test',
      //  'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
      //  [new Ingredient('Meat' ,20),
       //   new Ingredient('French Fries' ,8)
       //   ]),
       // new Recipe('A wonderful Recipe' ,
        //'This is a simple Test',
        //'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
       // [new Ingredient('Buns' ,8),
        //  new Ingredient('Flower' ,5)      
       // ]),
    //];
    private recipes :Recipe[] =[];
    constructor(
      
      //private slService :ShoppingListService,
       private store : Store<fromApp.AppState>){}

    setRecipes(recipes:Recipe[]){
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
    }
    
    getRecipes()
    {
       return this.recipes.slice()
    }

    getRecipe(index :number)
    {
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients :Ingredient[])
    {
        //this.slService.addIngredients(ingredient);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))

    }

    addRecipe(recipe :Recipe)
    {
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index :number ,newRecipe: Recipe)
    {
      this.recipes[index] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number)
    {
      this.recipes.splice(index ,1);
      this.recipeChanged.next(this.recipes.slice());
    }

   

}