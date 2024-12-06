    import {useDispatch, useSelector} from "react-redux";
    import {toggleTask} from "../redux/reducers/actions";

    const TaskList = ({filter}) => {
            const  tasks = useSelector(state => filter ?
                state.tasksReducer.filter((tasks) => tasks.category === filter)
                : state.tasksReducer
            )
            const dispatch = useDispatch()

            return (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`task-item ${task.completed ? 'completed' : ''}`}
                            onClick={() => dispatch(toggleTask(task.id))}
                        >
                            {task.text} <span>({task.category})</span>
                        </li>
                    ))}
                </ul>
            )
        }

        export default TaskList