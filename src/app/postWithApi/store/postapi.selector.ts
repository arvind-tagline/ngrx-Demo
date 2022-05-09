import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostApiState } from "./postapi.state";

export const POST_STATE_NAME = 'postApi';

const statePostApi = createFeatureSelector<PostApiState>(POST_STATE_NAME);

export const getAllApiPost = createSelector(statePostApi, state => {
    return state.postApi;
})

export const getPostsById = createSelector(statePostApi, (state: any, props: any) => {
    return state.postApi.find((post: any) => post.id === +props.id);
})