import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Posts } from "src/app/models/posts.model";


export const LOAD_POST_API = '[postapi page] load postapi';
export const LOAD_POST_API_SUCCESS = '[postapi page] load postapi success';
export const ADD_POST_API = '[postapi page] add post with api';
export const ADD_POST_API_SUCCESS = '[postapi page] add post with api success';
export const UPDATE_POST_API = '[postapi page] update post with api';
export const UPDATE_POST_API_SUCCESS = '[postapi page] update post with api success';
export const DELETE_POST_API = '[postapi page] delete post with api';
export const DELETE_POST_API_SUCCESS ='[postapi page] delete post with api success';

export const loadPostApi = createAction(LOAD_POST_API);
export const loadPostApiSuccess = createAction(LOAD_POST_API_SUCCESS, props<{ postApi: Posts[] }>());

export const addPostApi = createAction(ADD_POST_API, props<{ postApi: Posts }>());
export const addPostApiSuccess = createAction(ADD_POST_API_SUCCESS, props<{ postApi: Posts }>());

export const updatePost = createAction(UPDATE_POST_API, props<{ postApi: Posts }>());

//without adapter
// export const updatePostSuccess = createAction(UPDATE_POST_API_SUCCESS, props<{ postApi: Posts }>());
export const updatePostSuccess = createAction(UPDATE_POST_API_SUCCESS, props<{ postApi: Update<Posts> }>());

export const deletePost = createAction(DELETE_POST_API, props<{ id: any }>());
export const deletePostSuccess = createAction(DELETE_POST_API_SUCCESS, props<{ id: any }>());
