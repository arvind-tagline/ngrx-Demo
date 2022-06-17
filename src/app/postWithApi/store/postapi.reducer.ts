import { createReducer, on } from "@ngrx/store";
import { addPostApiSuccess, deletePostSuccess, loadPostApi, loadPostApiSuccess, updatePostSuccess } from "./postapi.actions";
import { initialState, postApiAdapter } from "./postapi.state";



const _postApiReducer = createReducer(initialState,
    on(loadPostApi, (state: any) => {
        return {
            ...state,
        }
    }),
    on(loadPostApiSuccess, (state: any, actions: any) => {
        // return postApiAdapter.setAll(actions.postApi,state)
        return {
            ...state,
            postApi:actions.postApi
        }
    }),
    on(addPostApiSuccess, (state: any, action: any) => {
        // return postApiAdapter.addOne(action, state)
        console.log('action :>> ', action);
        return {
            ...state,
            postApi: [...state.postApi, action],
        }
    }),
    on(updatePostSuccess, (state: any, action: any) => {
        // return postApiAdapter.updateOne(action.postApi, state)
        const upDatedPosts = state.postApi.map((post:any) => {
            return action.postApi?.id === post.id ? action.postApi : post;
        })
        return {
            ...state,
            postApi: upDatedPosts,
        }
    }),
    on(deletePostSuccess, (state, { id }) => {
        // return postApiAdapter.removeOne(id, state);
        // console.log('state', state)
        // console.log('id :>> ', id);
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