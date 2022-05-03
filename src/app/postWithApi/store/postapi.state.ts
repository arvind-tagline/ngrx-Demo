import { Posts } from "src/app/models/posts.model";

export interface PostApiState{
    postApi:Posts[]
}

export const initialState: PostApiState = {
    postApi:[]
}