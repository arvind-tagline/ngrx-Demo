import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState, on(addPost, (state, action) => {
    console.log('action', action)
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
        ...state,
        posts: [...state.posts, post],
    }
}), on(updatePost, (state , action) => {
    const upDatedPosts = state.posts.map((post) => {
        return action.post.id === post.id ? action.post : post;
    })
    return {
        ...state,
        posts:upDatedPosts,
    }
}), on(deletePost, (state, { id }) => {
    console.log('state', state)
    const updatedPost = state.posts.filter((post) => {
        return post.id !== id;
    });
    console.log('updatedPost :>> ', updatedPost);
    return {
        ...state,
        posts:updatedPost
    }
})
);

export function postsReducer(state:any, action:any) {
    return _postsReducer(state, action);
}