import {NgModule } from '@angular/core';


import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CounterService } from './counter.service';
import { RecipeService } from './recipes/recipe.service';
//import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
//import { LoginService } from './login.service';

@NgModule({
    providers :[
        
        CounterService,
        //ShoppingListService ,
        RecipeService ,
       {provide :HTTP_INTERCEPTORS ,useClass :AuthInterceptorService, multi:true},
       
    // LoginService
    ]
    
})

export class CoreModule{

}


