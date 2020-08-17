import {NgModule} from '@angular/core';
import { DummyComponent} from './dummy/dummy.component';
import {Routes ,RouterModule} from '@angular/router';
//import {NavbarComponent} from './navbar/navbar.component'; not used here 
import { Route } from '@angular/compiler/src/core';

const routes :Routes=[
    {path :'home' ,component :DummyComponent},
    {path :'about' ,component :DummyComponent},
    {path :'products' ,component :DummyComponent},
    {path :'services' ,component :DummyComponent},
    {path :'contacts' ,component :DummyComponent},
    {path :'signup' ,component :DummyComponent}
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]
})

export class AppRoutingModule {

}