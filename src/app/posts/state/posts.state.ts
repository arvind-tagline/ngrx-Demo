import { Post } from "src/app/models/posts.model"

export interface PostStates{
    posts: Post[];
}

export const initialState:PostStates = {
    posts: [
        {
            id:'1', title:'Test 1', description:'This is a test 1 description'
        },
        {
            id: '2', title: 'Test 2', description: 'This is a test 2 description'
        },
        {
            id: '3', title: 'Test 3', description: 'This is a test 3 description'
        },
        {
            id: '4', title: 'Test 4', description: 'This is a test 4 description'
        },
    ]
}