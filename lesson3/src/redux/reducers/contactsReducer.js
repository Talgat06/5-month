    import {types} from "./types";

    const initialState = {
            contactsTitle: ''
        }

    export default function contactsReducer(state = initialState, action) {
        if (action.type === types.WITH_PARAMS) {
            return {...state, contactsTitle: action.payload}
        }
        return state
    }