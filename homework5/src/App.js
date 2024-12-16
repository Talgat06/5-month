import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store';
import Navbar from './components/Navbar';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Bitcoin from './components/Bitcoin';
import Nasa from './components/Nasa';
import Weather from './components/Weather';
import './App.css';


const App = () => (
    <Provider store={store}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/cats" element={<Cats />} />
                <Route path="/dogs" element={<Dogs />} />
                <Route path="/bitcoin" element={<Bitcoin />} />
                <Route path="/nasa" element={<Nasa />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
