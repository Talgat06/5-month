import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import contactsReducer from "./contactsReducer";
import tasksReducer from "./tasksReducer";
import {categoriesReducer} from "./tasksReducer";
import usersReducer from "./usersReducer";


export const rootReducer = combineReducers({
    titleReducer,
    contactsReducer,
    tasksReducer,
    categoriesReducer,
    usersReducer
})