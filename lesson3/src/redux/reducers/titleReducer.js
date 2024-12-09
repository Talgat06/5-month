import {types} from "./types";

const initialState = {
            title: 'lesson1'
    }

    export default function titleReducer(state = initialState, action) {
        if (action.type === types.CHANGE_TITLE) {
            return {...state, title: 'lesson2'}
        }

        return state
    }