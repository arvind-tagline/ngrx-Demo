import { counterReducer } from "../counters/state/counter.reducer";
import { CounterData } from "../counters/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostStates } from "../posts/state/posts.state";

export interface AppStates{
    counter: CounterData,
    posts: PostStates
}

export const appReducer = {
    counter: counterReducer,
    posts:postsReducer
}