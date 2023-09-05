import { IButtonProps } from '../../types/props';
import s from './button.module.css';

const ButtonStandart: React.FC<IButtonProps> = ({ addTodo, children }) => {
    if (addTodo) {
        return (
            <button className={s.buttonStandart} onClick={addTodo}>
                {children}
            </button>
        );
    }

    return <button className={s.buttonStandart}>{children}</button>;
};

export { ButtonStandart };
