import { combineReducers } from 'redux';
import catsReducer from './catsReducer';
import dogsReducer from './dogsReducer';
import bitcoinReducer from './bitcoinReducer';
import nasaReducer from './nasaReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    cats: catsReducer,
    dogs: dogsReducer,
    bitcoin: bitcoinReducer,
    nasa: nasaReducer,
    weather: weatherReducer,
});
