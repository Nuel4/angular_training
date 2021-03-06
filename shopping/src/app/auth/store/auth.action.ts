import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS ='[Auth] Login';
export const AUTHENTICATE_FAIL = '[Auth] Login Failed';
export const SIGNUP_START ='[Auth] Signup Start';
export const CLEAR_ERROR ='[Auth] Clear Error';
export const AUTH_LOGIN  ='[Auth] Auth Login';
export const LOGOUT ='[Auth] Logout';



export class AuthenticateSucess implements Action{
    readonly type =AUTHENTICATE_SUCCESS;

    constructor(public payload :{email :string ,userId :string ,token :string , expirationDate : Date}){}

}

export class Logout implements Action{
    readonly type =LOGOUT;
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;

    constructor(public payload :{email :string ,password :string}){}

}
export class AuthenticateFail implements Action {
    readonly type = AUTHENTICATE_FAIL;

    constructor(public payload : string){}

}

export class SignupStart implements Action {
    readonly type = SIGNUP_START;

    constructor(public payload :{email :string ,password :string}){}

}

export class ClearError implements Action{
    readonly type =CLEAR_ERROR;
}

export class AuthLogin implements Action{
    readonly type =AUTH_LOGIN;
}

export type AuthActions = Logout | 
AuthenticateSucess | LoginStart |
 AuthenticateFail | SignupStart|
 ClearError|AuthLogin ;