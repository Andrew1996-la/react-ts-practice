import { ButtonStandart } from '../../ui/buttons/Button';
import { InputStandart, InputPassword } from '../../ui/inputs/input';
import { Link } from 'react-router-dom';

import s from './registrationPage.module.css';

const RegistrationPage = () => {
    return (
        <form className={s.registrationForm}>
            <h2 className={s.registration}>Зарегистрироваться!</h2>
            <InputStandart type='text' placeholder='введите логин' />
            <InputPassword type='password' placeholder='введите пароль' />
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
