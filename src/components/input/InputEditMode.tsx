import {useRef, useEffect} from 'react'
 
import s from './inputEditMode.module.css'

import { IInputEditMode } from '../../types/props'

const InputEditMode = ({text, renameTodo, toggleEditMode, id}: IInputEditMode) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        toggleEditMode(id)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  
  const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    renameTodo(id, e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return
    toggleEditMode(id);
  }

  return (
    <input
      ref={inputRef} 
      type="text" 
      value={text}
      onKeyDown={handleKeyDown}
      onChange={(e) => handleRename(e)}
      className={s.inputEditMode}/>
  )
}

export default InputEditMode