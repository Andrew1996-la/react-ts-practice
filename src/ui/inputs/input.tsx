import { useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './input.module.css';
import { IInputPassword, IInputStandart } from '../../types/props';





const InputStandart: React.FC<IInputStandart> = ({ type, placeholder }) => {
    return (
        <label className={s.label}>
            <input className={s.input} type={type} placeholder={placeholder} />
        </label>
    );
};

const InputPassword: React.FC<IInputPassword> = ({ type, placeholder }) => {
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
                className={s.input}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
            />
            {iconView}
        </label>
    );
};

export { InputStandart, InputPassword };
