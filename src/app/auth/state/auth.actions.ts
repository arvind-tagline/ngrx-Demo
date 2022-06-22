import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';
export const AUTO_LOGIN = '[auth page] auto login';
export const LOGOUT_ACTION = '[auth page] logout';


export const SIGNUP_START = '[auth page] signUp start';
export const SIGNUP_SUCCESS = '[auth page] signUp success';
export const SIGNUP_FAIL = '[auth page] signUp fail';

export const loginStart = createAction(LOGIN_START, props<{ email: any, password: any }>());
export const loginSuccess = createAction(LOGIN_SUCCESS,props<{user:any,redirect:boolean}>());
export const loginFail = createAction(LOGIN_FAIL);

export const signUpStart = createAction(SIGNUP_START, props<{name:any, email: any, password: any ,role:any}>());
export const signUpSuccess = createAction(SIGNUP_SUCCESS, props<{ user: User, redirect: boolean }>());
export const signUpFail = createAction(SIGNUP_FAIL);

export const autoLogin = createAction(AUTO_LOGIN);
export const logout = createAction(LOGOUT_ACTION);



export const dummyAction = createAction('[dummy action]');

