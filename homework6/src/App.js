
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css'
import Counter from './components/counter';

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default App;
