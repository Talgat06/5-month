
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const index = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default index;
