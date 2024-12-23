import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTask, toggleTask} from "../store/tasksSlice";

const TaskItem = ({task}) => {
    const dispatch = useDispatch()

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => dispatch(toggleTask(task.id))}>
                {task.title}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
    );
};

export default TaskItem;