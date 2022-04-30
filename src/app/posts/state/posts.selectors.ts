import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostStates } from "./posts.state";

const postsState = createFeatureSelector<PostStates>('posts');

export const getPosts = createSelector(postsState, state => {
    return state.posts;
});

export const getPostsById = createSelector(postsState, (state: any, props: any) => {
    console.log('props', props)
    return state.posts.find((post:any)=>post.id===props.id);
})
