import { Link } from 'react-router-dom';

import s from './loginPage.module.css';
import { ButtonStandart } from '../../ui/buttons/Button';
import { InputStandart, InputPassword } from '../../ui/inputs/input';



const LoginPage = () => {
    return (
        <form className={s.loginForm}>
            <h2 className={s.greeting}>Добро пожаловть!</h2>
            <InputStandart type='text' placeholder='введите логин' />
            <InputPassword type='password' placeholder='введите пароль' />
            <div className={s.btnPanel}>
                <Link className={s.link} to='/'>
                    <ButtonStandart>Login</ButtonStandart>
                </Link>
                <Link className={s.link} to='/registration'>
                    <ButtonStandart>Registration</ButtonStandart>
                </Link>
            </div>
        </form>
    );
};

export default LoginPage;
