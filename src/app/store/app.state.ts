import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selectors";
import { AuthState } from "../auth/state/auth.state";
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
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState;
}

// export const appReducer = {
//     counter: counterReducer,
//     posts:postsReducer
// }

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    router: routerReducer
}