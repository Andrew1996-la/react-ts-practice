import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonStandart } from '../../ui/buttons/Button';
import { InputPassword, InputStandart } from '../../ui/inputs/input';
import s from './registrationPage.module.css';

const RegistrationPage = () => {
    const [login, setLogin] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const typeInput = e.target.getAttribute('data-type');
        typeInput === 'login' ? setLogin(e.target.value) : setPassword(e.target.value);
    };

    return (
        <form className={s.registrationForm}>
            <h2 className={s.registration}>Зарегистрироваться!</h2>
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
                <Link className={s.link} to='/login'>
                    <ButtonStandart>Login</ButtonStandart>
                </Link>
                <Link className={s.link} to='/hereWillBeFormRegistration'>
                    <ButtonStandart>Registration</ButtonStandart>
                </Link>
            </div>
        </form>
    );
};

export default RegistrationPage;
