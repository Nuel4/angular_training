import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router'; 
import {HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoute : Routes =[
   {path: '' , redirectTo :'/home' ,pathMatch: 'full'}, 
  { path : 'user' , component : HomeComponent}, 
    {path :'' ,component :UserComponent ,children:[
     { path :'new' ,component :UserComponent},
     { path :':id' ,component :UserComponent},
    { path :':id/user' ,component :UserComponent}]},
];

  
@NgModule({
    imports :[RouterModule.forRoot(appRoute)],
    exports :[RouterModule]
})
export class AppRoutingModel
{

}



