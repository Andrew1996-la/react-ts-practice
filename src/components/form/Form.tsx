import { IForm } from '../../types/props';
import { ButtonStandart } from '../../ui/buttons/Button';
import { InputPassword, InputStandart } from '../../ui/inputs/input';
import s from './form.module.css';

import { Link } from 'react-router-dom';

const Form: React.FC<IForm> = ({ title }) => {
    return (
        <form className={s.registrationForm}>
            <h2 className={s.registration}>{title}</h2>
            <InputStandart type='text' placeholder='введите логин' />
            <InputPassword type='password' placeholder='введите пароль' />
            <div className={s.btnPanel}>
                <Link className={s.link} to='/login'>
                    <ButtonStandart>Login</ButtonStandart>
                </Link>
                <Link className={s.link} to='/'>
                    <ButtonStandart>Registration</ButtonStandart>
                </Link>
            </div>
        </form>
    );
};

export default Form;
