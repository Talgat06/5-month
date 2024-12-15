import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UsersListPage from './pages/usersListPage/UsersListPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import Menu from './components/Menu';
import AboutPage from './pages/AboutPage';
import CatPage from './pages/CatPage';
import JokePage from './pages/JokePage';
import AppNavbar from './pages/Navbar';

function App() {

    return (
        <BrowserRouter>
            <AppNavbar />
            <div className='container mt-4'>
                <Routes>
                    <Route path='/' element={<AboutPage />} />
                    <Route path='/cats' element={<CatPage />} />
                    <Route path='/jokes' element={<JokePage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;