import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './mainSlice'
import postsReducer from './postsSlice'
import tasksReducer from './tasksSlice'

export const store = configureStore({
    reducer: {
        mainReducer,
        postsReducer,
        tasksReducer
    },
})
