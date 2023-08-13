import { IButtonProps } from '../../types/props';
import s from './button.module.css';

const ButtonStandart: React.FC<IButtonProps> = ({ addTodo, children }) => {
    return (
        <button className={s.buttonStandart} onClick={addTodo}>
            {children}
        </button>
    );
};

export { ButtonStandart };
