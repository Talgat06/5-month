import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TaskItem from "./TaskItem";
import {loadTasks} from "../store/tasksSlice";

const TaskList = () => {
    const { items, status} = useSelector(state => state.tasksReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadTasks())
        }
    }, [dispatch, status])

    return (
        <ul>
            {items.map((task) => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </ul>
    )
};

export default TaskList;