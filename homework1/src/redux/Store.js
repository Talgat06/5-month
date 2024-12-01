
import { createStore } from 'redux';
import counterReducer from '../redux/reducer';

const store = createStore(counterReducer);

export default store;
