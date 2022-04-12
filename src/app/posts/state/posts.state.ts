import { Post } from "src/app/models/posts.model"

export interface PostStates{
    posts: Post[];
}

export const initialState:PostStates = {
    posts: [
        {
            id:'1', title:'Test 1', description:'This is a test description'
        },
        {
            id: '2', title: 'Test 2', description: 'This is a test 2 description'
        },
        {
            id: '1', title: 'Test 1', description: 'This is a test description'
        },
        {
            id: '2', title: 'Test 2', description: 'This is a test 2 description'
        },
        {
            id: '1', title: 'Test 1', description: 'This is a test description'
        },
        {
            id: '2', title: 'Test 2', description: 'This is a test 2 description'
        },
        {
            id: '1', title: 'Test 1', description: 'This is a test description'
        },
        {
            id: '2', title: 'Test 2', description: 'This is a test 2 description'
        },
    ]
}