
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';




export interface State {
    ingredients :Ingredient[];
    editedIngredient :Ingredient;
    editedIngredientIndex :number;
}
//export interface AppState {
  //  shoppingList :State;
//}

const initialState :State ={
    ingredients :[ new Ingredient('Apple' ,5),new Ingredient('Tomatoes' ,8),
],
  editedIngredient :null,
  editedIngredientIndex :-1
};

export function ShoppingListReducer(state :State =initialState ,action :ShoppingListAction.ShoppingListAction){

    switch(action.type){
        case  ShoppingListAction.ADD_INGREDIENT :
            return {
                ...state ,
                ingredients :[ ...state.ingredients ,action.payload]
            };
        case ShoppingListAction.ADD_INGREDIENTS:
            return {
                    ...state,
                    ingredients :[...state.ingredients , ...action.payload]
                }
        case ShoppingListAction.UPDATE_INGREDIENT:
            const ingredient =state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const updatedIngredients =[...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;
            return {
                ...state,
                ingredients:updatedIngredients
            }

            case ShoppingListAction.DELETE_INGREDIENT:
                return {
                    ...state,
                    ingredient :state.ingredients.filter((ig ,igIndex) =>{
                        return igIndex !== action.payload;
                    })
                }
            default:
                return state;
    }

}