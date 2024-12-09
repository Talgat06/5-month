    import {types} from "./types";
    import axios from "axios";


    export function changeTitleAction() {
            return {
                type: types.CHANGE_TITLE
            }
        }

    export function withParamsAction(text) {
        return {
            type: types.WITH_PARAMS,
            payload: text
        }
    }

    export const addTask = (task) => ({
        type: types.ADD_TASK,
        payload: task
    })

    export const toggleTask = (taskId) => ({
        type: types.TOGGLE_TASK,
        payload: taskId
    })

    export function asyncFunction () {
        return function () {
            setTimeout(() => {
                alert('Hello')
            }, 2000)
        }
    }

    function getUsersAction (users) {
        return {
            type: 'USER',
            payload: users
        }
    }

    export function fetchUsersAction () {
        return async function (dispatch) {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch(getUsersAction(data))
        }
    }

    export const searchUserRequest = () => ({
        type: types.SEARCH_USERS_REQUEST
    })

    export const searchUserSuccess = (users) => ({
        type: types.SEARCH_USERS_SUCCESS,
        payload: users
    })

    export const searchUsersFailure = (error) => ({
        type: types.SEARCH_USERS_FAILURE,
        payload: error
    })

    export const fetchUsers = (query) => async (dispatch) => {
        dispatch(searchUserRequest())
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
            dispatch(searchUserSuccess(response.data.items))
        } catch (error) {
            dispatch(searchUsersFailure(error.message))
        }
    }