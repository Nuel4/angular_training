import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModel} from './app-routing.module';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //HttpModule,
    AppRoutingModel,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
