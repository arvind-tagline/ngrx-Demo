import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logout, signUpSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState,
    on(loginSuccess, (state: any, action: any) => {
        return {
            ...state,
            user: action.user
        }
    }), on(signUpSuccess, (state: any, action: any) => {
        return {
            ...state,
            user:action.user
        }
    }), on(logout, (state: any, action: any) => {
        return {
            ...state,
            user:null
        }
    })
);

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action);
}