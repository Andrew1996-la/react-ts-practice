import { useState } from 'react';
import { IForm } from '../../types/props';
import { InputPassword, InputStandart } from '../../ui/inputs/input';
import s from './form.module.css';

import { Link } from 'react-router-dom';

const Form: React.FC<IForm> = ({ title, handleRegister, handleLogin }) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleGetUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputType = e.target.dataset.type;
        inputType === 'login' ? setLogin(e.target.value) : setPassword(e.target.value);
    };

    const registerUser = () => {
        if (!handleRegister) return;
        handleRegister(login, password);
    };

    const loginUser = () => {
        if(!handleLogin) return;
        handleLogin(login, password);
    }

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
                    <button className={s.buttonStandart} onClick={loginUser}>Login</button>
                </Link>
                <Link className={s.link} to='/registration'>
                    <button className={s.buttonStandart} onClick={registerUser}>
                        Registration
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default Form;
