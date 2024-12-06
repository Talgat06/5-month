import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withParamsAction} from "../../redux/reducers/actions";

const ContactsPage = () => {
    const dispatch = useDispatch()
    const title = useSelector(state => state.contactsReducer.contactsTitle)
    const [input, setInput] = useState('')

    const withParams = () => {
        dispatch(withParamsAction('Hello geeks'))
    }

    const addInput = () => {
        dispatch(withParamsAction(input))
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>--------------------------------------------------</p>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addInput}>add</button>
        </div>
    );
};

export default ContactsPage;