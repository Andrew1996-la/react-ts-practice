import MainPage from '../pages/main/MainPage';
import RegistrationPage from '../pages/registration/RegistrationPage';
import LoginPage from '../pages/login/LoginPage';

import { Routes, Route } from 'react-router-dom';

import s from './app.module.css';

const App: React.FC = () => {
    return (
        <div className={s.appContainer}>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/registration' element={<RegistrationPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default App;
