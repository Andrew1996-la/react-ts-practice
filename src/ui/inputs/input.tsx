import { useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IInputPassword, IInputStandart } from '../../types/props';
import s from './input.module.css';

const InputStandart: React.FC<IInputStandart> = ({
    type,
    placeholder,
    handleUserInfo,
    dataAttribute,
}) => {
    return (
        <label className={s.label}>
            <input
                data-type={dataAttribute}
                className={s.input}
                type={type}
                placeholder={placeholder}
                onChange={handleUserInfo}
            />
        </label>
    );
};

const InputPassword: React.FC<IInputPassword> = ({
    type,
    placeholder,
    handleUserInfo,
    dataAttribute,
}) => {
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
                data-type={dataAttribute}
                className={s.input}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                onChange={handleUserInfo}
            />
            {iconView}
        </label>
    );
};

export { InputPassword, InputStandart };
