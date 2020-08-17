import { NgModule } from '@angular/core';

import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from '../shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
//import { LoginService } from '../login.service';


@NgModule({
    declarations:[
         ShoppingListComponent, ShoppingListEditComponent 
        ],

    imports :[
         FormsModule,
         RouterModule.forChild([ 
        
        { path : '' , component : ShoppingListComponent},
 
    ]),
    SharedModule
],
//providers :[LoginService] 
   
})
export class ShoppingListModule{

}