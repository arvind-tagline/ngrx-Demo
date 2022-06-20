import { createFeatureSelector, createSelector } from "@ngrx/store";
import { currentRoute } from "src/app/store/router/router.selector";
import { postApiAdapter, PostApiState } from "./postapi.state";
import { RouterStateUrl } from "./../../store/router/custom-serializer";

export const POST_STATE_NAME = 'postApi';

const statePostApi = createFeatureSelector<PostApiState>(POST_STATE_NAME);
export const postSelector = postApiAdapter.getSelectors();

// export const getAllApiPost = createSelector(statePostApi, state => {
//     return state.postApi;
// })


export const getAllApiPost = createSelector(statePostApi, postSelector.selectAll);

export const getPostEntity = createSelector(statePostApi, postSelector.selectEntities)

//update post using props id 

// export const getPostsById = createSelector(statePostApi, (state: any, props: any) => {
//     return state.postApi.find((post: any) => post.id === +props.id);
// })

//update post using ngrx router

// export const getPostsById = createSelector(getAllApiPost, currentRoute,
//     (postApi, route: RouterStateUrl) => {
//         return postApi ? postApi.find((post) => post.id === +route.params['id']) : '';
//     })


//update post using ngrx adepter
export const getPostsById = createSelector(
    getPostEntity,
    currentRoute,
    (postApi, route: RouterStateUrl) => {
        return postApi ? postApi[route.params['id']] : null;
    })