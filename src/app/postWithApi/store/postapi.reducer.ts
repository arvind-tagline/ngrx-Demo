import { createReducer, on } from "@ngrx/store";
import { addPostApiSuccess, deletePostSuccess, loadPostApi, loadPostApiSuccess, updatePostSuccess } from "./postapi.actions";
import { initialState } from "./postapi.state";



const _postApiReducer = createReducer(initialState,
    on(loadPostApi, (state: any) => {
        return {
            ...state,
        }
    }),
    on(loadPostApiSuccess, (state:any,actions:any) => {
        return {
            ...state,
            postApi:actions.postApi
        }
    }),
    on(addPostApiSuccess, (state:any, action:any) => {
        console.log('action :>> ', action);
        return {
            ...state,
            postApi: [...state.postApi, action],
        }
    }),
    on(updatePostSuccess, (state: any, action: any) => {
        const upDatedPosts = state.postApi.map((post:any) => {
            return action.postApi?.id === post.id ? action.postApi : post;
        })
        return {
            ...state,
            postApi: upDatedPosts,
        }
    }),
    on(deletePostSuccess, (state, { id }) => {
        console.log('state', state)
        console.log('id :>> ', id);
        const updatedPost = state.postApi.filter((post) => {
            return post.id !== id;
        });
        console.log('updatedPost :>> ', updatedPost);
        return {
            ...state,
            postApi: updatedPost
        }
    })
)

export function postApiReducer(state: any, actions:any) {
    return _postApiReducer(state, actions)
}