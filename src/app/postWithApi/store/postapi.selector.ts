import { createFeatureSelector, createSelector } from "@ngrx/store";
import { currentRoute } from "src/app/store/router/router.selector";
import { PostApiState } from "./postapi.state";
import { RouterStateUrl } from "./../../store/router/custom-serializer";

export const POST_STATE_NAME = 'postApi';

const statePostApi = createFeatureSelector<PostApiState>(POST_STATE_NAME);

export const getAllApiPost = createSelector(statePostApi, state => {
    return state.postApi;
})

// export const getPostsById = createSelector(statePostApi, (state: any, props: any) => {
//     return state.postApi.find((post: any) => post.id === +props.id);
// })
export const getPostsById = createSelector(getAllApiPost, currentRoute, (postApi, route: RouterStateUrl) => {
    return postApi ? postApi.find((post) => post.id === +route.params['id']) : '';
})