import { counterReducer } from "../counter/state/counter.reducer";
import { CounterData } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostStates } from "../posts/state/posts.state";
import { SharedReducer } from "./shared.reducer";
import { SHARED_STATE_NAME } from "./shared.selectors";
import { SharedState } from "./shared.state";

// export interface AppStates{
//     counter: CounterData,
//     posts: PostStates
// }

export interface AppStates {
    [SHARED_STATE_NAME]: SharedState;
}

// export const appReducer = {
//     counter: counterReducer,
//     posts:postsReducer
// }

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
}