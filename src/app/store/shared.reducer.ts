import { createReducer, on } from "@ngrx/store";
import { errorMessage, loadingSpinner } from "./shared.actions";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(initialState, on(loadingSpinner, (state, action) => {
    return {
        ...state,
        showLoading: action.status
    }
}), on(errorMessage, (state, action) => {
    return {
        ...state,
         message: action.message
    }   
}),

);

export function SharedReducer(state:any, action:any) {
    return _sharedReducer(state, action);
}