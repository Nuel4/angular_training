import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from  './auth.action';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { User } from '../user.model';



export interface AuthResponseData{
    kind :string;    
    idToken	:string;
    email	:string;
    refreshToken :string;
    expiresIn :string;
    localId :string;
    registered? :boolean
    
    }
    const handleAuthentication = (expiresIn :number ,email :string ,userId :string ,token:string)=>{
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000
        );
        const user = new User(email ,userId ,token ,expirationDate);
        localStorage.setItem('userData' ,JSON.stringify(user));

        return new AuthActions.AuthenticateSucess({ 
            email :email ,
            userId :userId ,
        token :token , expirationDate : expirationDate });
    }
    const handleError = (errorRes :any)=>{
        
        let errorMessage = 'An unknown error occurred';
        if(!errorRes.error || !errorRes.error.error)
        {
            return of(new AuthActions.AuthenticateFail(errorMessage));
        }
        switch(errorRes.error.error.message)
        {
            case 'EMAIL_EXISTS': errorMessage ='This email already exists ,use another email'
            break;

            case 'EMAIL_NOT_FOUND': errorMessage ='This email does not exist'
            break;

            case 'INVALID_PASSWORD': errorMessage ='Password not correct'
            break;
            
        }
        return of(new AuthActions.AuthenticateFail(errorMessage))
    }


@Injectable()
export class AuthEffects{

    @Effect()
    authSignUp =this.actions$.pipe(
        ofType(AuthActions.SIGNUP_START),
        switchMap((signupAction : AuthActions.SignupStart) =>{
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
            {
                email : signupAction.payload.email,
                password : signupAction.payload.password,
                returnSecureToken:true
            })
          
        })
        
        )
        

    @Effect()
    authLogin = this.actions$.pipe(ofType(AuthActions.LOGIN_START),
    switchMap((AuthData :AuthActions.LoginStart)=>{
        return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +environment.firebaseAPIKey,
        {
            email : AuthData.payload.email,
            password :AuthData.payload.password,
            returnSecureToken:true
        }
        ).pipe(
            map(resData =>{
             return handleAuthentication(+resData.expiresIn ,resData.email ,resData.idToken ,resData.localId)
               
            }),

            catchError(errorRes =>{

             return handleError(errorRes);
          
        }));
      

    })
    
    );
    
    @Effect({dispatch :false})
    authRedirect = this.actions$.pipe(ofType(AuthActions.AUTHENTICATE_SUCCESS, AuthActions.LOGOUT) ,
    tap(()=>{
        this.router.navigate(['/']);
        
    }));


    authLogout = this.actions$.pipe(ofType(AuthActions.LOGOUT) ,tap(()=>{
        localStorage.removeItem('userData');
    }))
    
    constructor(private actions$ :Actions ,private http :HttpClient ,private router : Router){}
}