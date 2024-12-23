import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../store/tasksSlice";

const TaskForm = () => {
    const [title, setTitle] = useState('')
    const {items} =useSelector(state => state.tasksReducer)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({id: Date.now(), title, completed: false}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                   placeholder="Add a new task.."
                    value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button>Add Task</button>
        </form>
    );
};

export default TaskForm;