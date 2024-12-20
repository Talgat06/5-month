
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => (state > 0 ? state - 1 : 0),
        incrementByTen: (state) => state + 10,
        decrementByTen: (state) => (state >= 10 ? state - 10 : 0),
        reset: () => 0,
    },
});

export const { increment, decrement, incrementByTen, decrementByTen, reset } = counterSlice.actions;
export default counterSlice.reducer;
