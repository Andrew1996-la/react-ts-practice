import { useEffect, useRef } from 'react';

import { IInputProps } from '../../types/props';

import s from './input.module.css';
import { InputStandart } from '../../ui/inputs/input';

const Input: React.FC<IInputProps> = ({ value, handleInput, addTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;
        addTodo();
    };

    return (
        <>
            <input
                ref={inputRef}
                placeholder='Добавить новую задачу'
                className={s.input}
                value={value}
                onKeyDown={handleKeyDown}
                onChange={(e) => handleInput(e)}
            />
        </>
    );
};

export default Input;
