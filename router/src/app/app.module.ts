import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//import {Routes, RouterModule} from '@angular/router';
//import {} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server-resolver.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    UsersComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //HttpModule,
    //RouterModule.forRoot(appRoutes),
  ],
  providers: [ServersService ,AuthService ,AuthGuard ,CanDeactivateGuard ,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
