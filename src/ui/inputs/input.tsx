import { useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IInputPassword, IInputStandart } from '../../types/props';
import s from './input.module.css';

const InputStandart: React.FC<IInputStandart> = ({ type, placeholder, handleGetUserInfo }) => {
    return (
        <label className={s.label}>
            <input
                data-type='login'
                className={s.input}
                type={type}
                placeholder={placeholder}
                onChange={handleGetUserInfo}
            />
        </label>
    );
};

const InputPassword: React.FC<IInputPassword> = ({ type, placeholder, handleGetUserInfo }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = (): void => {
        setShowPassword((prevState) => !prevState);
    };

    const iconView = showPassword ? (
        <FontAwesomeIcon icon={faEyeSlash} className={s.icon} onClick={togglePasswordVisibility} />
    ) : (
        <FontAwesomeIcon icon={faEye} className={s.icon} onClick={togglePasswordVisibility} />
    );

    return (
        <label className={s.label}>
            <input
                data-type='password'
                className={s.input}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                onChange={handleGetUserInfo}
            />
            {iconView}
        </label>
    );
};

export { InputPassword, InputStandart };
