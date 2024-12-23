import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchTasks} from "../components/tasksAPI";

    export const loadTasks = createAsyncThunk(
        'tasks/loadTasks',
        async () => {
            const tasks = await fetchTasks()
            return tasks
        }
    )

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle'
    },
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload)
        },
        toggleTask: (state, action) => {
            const task = state.items.find((task) => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter((task) => task.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTasks.pending, (state) => {
                state.state = 'loading'
            })
            .addCase(loadTasks.fulfilled, (state,action) => {
                state.status = 'succsesed'
                state.items = action.payload
            })
            .addCase(loadTasks.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const {addTask,toggleTask,deleteTask} = tasksSlice.actions
export default tasksSlice.reducer