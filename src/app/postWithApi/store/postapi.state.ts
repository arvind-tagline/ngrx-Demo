import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Posts } from "src/app/models/posts.model";

export interface PostApiState{
    postApi:Posts[]
}

// export interface PostApiState extends EntityState<Posts>{
// }

export const postApiAdapter = createEntityAdapter<Posts>();
export const initialState: PostApiState = {
    postApi:[]
}

// export const initialState: PostApiState = postApiAdapter.getInitialState();