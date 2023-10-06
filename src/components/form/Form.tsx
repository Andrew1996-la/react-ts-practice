import { useState } from 'react';
import { IForm } from '../../types/props';
import { InputPassword, InputStandart } from '../../ui/inputs/input';
import s from './form.module.css';

import { Link } from 'react-router-dom';
import { ButtonStandart } from '../../ui/buttons/Button';

const Form: React.FC<IForm> = ({ title, handleRegister, handleLogin }) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [warning, setWarning] = useState<boolean>(false);

    const handleGetUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputType = e.target.dataset.type;
        inputType === 'login' ? setLogin(e.target.value) : setPassword(e.target.value);
    };

    const registerUser = (): void => {
        if (!handleRegister) return;
        handleRegister(login, password);
    };

    const loginUser = (): void => {
        if (!handleLogin) return;
        handleLogin(login, password);
    };

    return (
        <form className={s.registrationForm}>
            <h2 className={s.registration}>{title}</h2>
            <InputStandart
                type='email'
                placeholder='введите логин'
                handleGetUserInfo={(e) => handleGetUserInfo(e)}
            />
            <InputPassword
                type='password'
                placeholder='введите пароль'
                handleGetUserInfo={(e) => handleGetUserInfo(e)}
            />
            <div className={s.btnPanel}>
                <Link className={s.link} to='/login'>
                    <ButtonStandart callback={loginUser}>Login</ButtonStandart>
                </Link>
                <Link className={s.link} to='/registration'>
                    <ButtonStandart callback={registerUser}>Registration</ButtonStandart>
                </Link>
            </div>
        </form>
    );
};

export default Form;
