import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputAction, changeTitleWithParams, mainInfo} from "../../store/mainSlice";

const MainPage = () => {

    const {title, inputValue} = useSelector(state => state.mainReducer)
    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch(mainInfo())
    }

    const withParamsChange = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    return (
        <div>
            <h1>{title}</h1>
            <input type="text"/>
            <button onChange={changeInput} value={inputValue}>clear</button>
            <button onClick={withParamsChange}>add</button>
            <button>delete title</button>
            {/*<button onClick={changeTitle}>change title</button>*/}
            {/*<button onClick={withParamsChange}>change title with params</button>*/}
        </div>
    );
};

export default MainPage;