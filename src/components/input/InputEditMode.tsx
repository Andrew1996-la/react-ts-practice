import s from './inputEditMode.module.css'

import { IInputEditMode } from '../../types/props'

const InputEditMode = ({text, renameTodo, id}: IInputEditMode) => {

  const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    renameTodo(id, e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return

  }
  
  return (
    <input 
      type="text" 
      value={text}
      onKeyDown={handleKeyDown}
      onChange={(e) => handleRename(e)}
      className={s.inputEditMode}
     />
  )
}

export default InputEditMode