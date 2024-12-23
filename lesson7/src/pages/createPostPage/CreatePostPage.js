import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createPost} from "../../store/postsSlice";

const CreatePostPage = () => {
    const [form, setForm] = useState({})
    const dispatch= useDispatch()

    const changeForm = (event) => {
        setForm({...form, [event.target.name] : event.target.value})
    }

    const submit = (event) => {
        dispatch(createPost(form))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="title"/>
                <textarea cols="30" rows="10" name="body" onChange={changeForm}></textarea>
                <button type="submit">create post</button>
            </form>
        </div>
    );
};

export default CreatePostPage;