export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SET_FILTER = 'SET_FILTER';

export const addUser = (user) => ({ type: ADD_USER, payload: user });
export const removeUser = (id) => ({ type: REMOVE_USER, payload: id });
export const updateUser = (user) => ({ type: UPDATE_USER, payload: user });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
