import { Link } from 'react-router-dom';

import s from './loginPage.module.css';
import { ButtonStandart } from '../../ui/buttons/Button';
import { InputStandart, InputPassword } from '../../ui/inputs/input';
import { useState } from 'react';

const LoginPage = () => {
    const [login, setLogin] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const typeInput = e.target.getAttribute('data-type');
        typeInput === 'login' ? setLogin(e.target.value) : setPassword(e.target.value);
    };

    return ( 
        <form className={s.loginForm}>
            <h2 className={s.greeting}>Добро пожаловть!</h2>
            <InputStandart
                handleUserInfo={(e) => handleUserInfo(e)}
                type='text'
                placeholder='введите логин'
                dataAttribute='login'
            />
            <InputPassword
                handleUserInfo={(e) => handleUserInfo(e)}
                type='password'
                placeholder='введите пароль'
                dataAttribute='password'
            />
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
