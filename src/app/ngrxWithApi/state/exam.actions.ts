import { createAction, props } from "@ngrx/store";


export const LOAD_POSTS = '[posts page] load post';
export const LOAD_POSTS_SUCCESS = '[posts page] load post success'



export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ post: any }>());