import { IButtonProps } from '../../types/props';
import s from './button.module.css';

const ButtonStandart: React.FC<IButtonProps> = ({ callback, children }) => {
    return (
        <button className={s.buttonStandart} onClick={callback}>
            {children}
        </button>
    );
};

export { ButtonStandart };
