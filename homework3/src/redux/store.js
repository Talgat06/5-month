import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import bitcoinReducer from './reducers/bitcoinReducer';

const rootReducer = combineReducers({
    bitcoin: bitcoinReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
