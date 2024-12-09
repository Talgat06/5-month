import React from 'react';
import {useDispatch} from "react-redux";
import {asyncFunction} from "../redux/reducers/actions";

const ChangeTitle = () => {
    const dispatch = useDispatch()

    const changeAboutTitle = () => {
        dispatch({
            type: 'CHANGE_ABOUT_TITLE'
        })
    }
    return (
        // <button onClick={changeAboutTitle}>change about title</button>
        <button onClick={() => dispatch(asyncFunction())}>After 2 sec</button>
    );
};

export default ChangeTitle;