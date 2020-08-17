import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users/active-users.component';
import { AppRoutingModel } from './app-routing.model';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
//import { LoginService } from './login.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    InactiveUsersComponent,
    ActiveUsersComponent,
  
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModel,
    StoreModule.forRoot( fromApp.appReducer),
    SharedModule,
    CoreModule,
    EffectsModule.forRoot([AuthEffects])
    
  ],
  
  bootstrap: [AppComponent],
  //providers :[LoginService]
  
  
})
export class AppModule { }
