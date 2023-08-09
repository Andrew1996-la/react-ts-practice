import MainPage from '../pages/main/MainPage';
import LoginPage from '../pages/login/LoginPage'
import RegistrationForm from '../pages/registration/RegistrationPage';
 
import s from './app.module.css';

const App: React.FC = () => {
    return (
        <div className={s.appContainer}>
            {/* <LoginPage /> */}
            {/* <RegistrationForm /> */}
            <MainPage />
        </div>
    )
}

export default App