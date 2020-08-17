import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.action';



@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
})

export class HeaderComponent implements OnInit ,OnDestroy
{
    isAuthenticated =false;
    private userSub :Subscription;

    constructor(private dataStorageService :DataStorageService ,private authService :AuthService ,private store :Store<fromApp.AppState>){}
   
    ngOnInit(){
      this.userSub = this.store.select('auth').pipe(map(authState =>          authState.user
      )).subscribe( user=>{
          this.isAuthenticated = !!user //!user ? false :true same meaning
          console.log(!user);
          console.log(!!user);
      })
    }
    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onLogout(){
        this.store.dispatch(new AuthActions.Logout())
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe()
    }
}



