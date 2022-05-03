import { createReducer, on } from "@ngrx/store";
import { loadPostApi, loadPostApiSuccess } from "./postapi.actions";
import { initialState } from "./postapi.state";



const _postApiReducer = createReducer(initialState,
    on(loadPostApi, (state: any) => {
        return {
            ...state,
        }
    }),
    on(loadPostApiSuccess, (state: any,actions:any) => {
        return {
            ...state,
            postApi:actions.postApi
        }
    })
)

export function postApiReducer(state: any, actions:any) {
    return _postApiReducer(state, actions)
}