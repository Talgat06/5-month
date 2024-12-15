import { combineReducers } from "redux";
import { charactersReducer } from "./CharacterReducer";
import { catReducer } from "./CatReducer";

export const rootReducer = combineReducers({
    charactersReducer,
    catReducer
})