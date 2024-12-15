import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import BitcoinPrice from "./components/BitcoinPrice";
import './App.css'

ReactDOM.render(
    <Provider store={store}>
        <BitcoinPrice/>
    </Provider>,
    document.getElementById('root')
);
