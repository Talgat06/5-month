import { combineReducers } from 'redux';
import { ADD_USER, REMOVE_USER, UPDATE_USER, SET_FILTER } from './actions';

const initialUsers = [];

const usersReducer = (state = initialUsers, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];
        case REMOVE_USER:
            return state.filter((user) => user.id !== action.payload);
        case UPDATE_USER:
            return state.map((user) =>
                user.id === action.payload.id ? action.payload : user
            );
        default:
            return state;
    }
};

const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    users: usersReducer,
    filter: filterReducer,
});
