import { createAction, props } from "@ngrx/store";
import { Posts } from "src/app/models/posts.model";


export const LOAD_POST_API = '[postapi page] load postapi';
export const LOAD_POST_API_SUCCESS = '[postapi page] load postapi success';

export const loadPostApi = createAction(LOAD_POST_API);
export const loadPostApiSuccess = createAction(LOAD_POST_API_SUCCESS, props<{ postApi:Posts[]}>());