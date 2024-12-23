import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        title: 'old title',
        input: ''
    },
    reducers: {
        mainInfo: (state, action) => {
            state.title = 'new title'
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
        },changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },

}
})

export const {mainInfo, changeTitleWithParams,changeInputAction} = mainSlice.actions

export default mainSlice.reducer