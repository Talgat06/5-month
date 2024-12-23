import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (_, { dispatch }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        dispatch(postsInfo(posts))
    }
)

export const createPost = createAsyncThunk(
    'createPost',
    async function (info, {dispatch}){
        const options = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(info)
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: []
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload
        }
    },
})

export const { postsInfo } = postsSlice.actions

export default postsSlice.reducer
