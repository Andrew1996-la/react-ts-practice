import { ButtonStandart } from '../../ui/buttons/Button';
import Input from '../input/Input';
import { useState } from 'react';
import { addTask } from '../../store/todoSlise';

import s from './controlPanel.module.css';

import { useAppDispatch } from '../../hooks';
const ControlPanel: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setInputValue(e.target.value);
    };

    const addTodo = (): void => {
        dispatch(addTask(inputValue));
        setInputValue('');
    };

    return (
        <div className={s.controlPanel}>
            <Input value={inputValue} handleInput={handleInput} addTodo={addTodo} />
            <ButtonStandart addTodo={addTodo}>Добавить</ButtonStandart>
        </div>
    );
};

export default ControlPanel;
