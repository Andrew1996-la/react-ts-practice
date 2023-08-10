import { useRef, useEffect } from 'react';

import s from './inputEditMode.module.css';

import { IInputEditMode } from '../../types/props';
import { useAppDispatch } from '../../hooks';
import { toggleEditMode, renameTodo } from '../../store/todoSlise';

const InputEditMode: React.FC<IInputEditMode> = ({ text, id }) => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();

        function handleClickOutside(event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                dispatch(toggleEditMode(id));
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [inputRef]);

    const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newTile = e.target.value;
        dispatch(renameTodo({ id, newTile }));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;
        dispatch(toggleEditMode(id));
    };

    return (
        <input
            ref={inputRef}
            type='text'
            value={text}
            onKeyDown={handleKeyDown}
            onChange={(e) => handleRename(e)}
            className={s.inputEditMode}
        />
    );
};

export default InputEditMode;
