import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostStates } from "./posts.state";

const postsState = createFeatureSelector<PostStates>('posts');

export const getPosts = createSelector(postsState, state => {
    return state.posts;
});
