import { IInputStandart } from "../../types/props"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import s from "./input.module.css"

const InputStandart: React.FC<IInputStandart> = ({type, placeholder}) => {
  
  let eyeIcon = type === 'password' ? <FontAwesomeIcon icon={faEye} className={s.icon}/> : null;
  
  const showPassword = () => {
    // eyeIcon = <FontAwesomeIcon icon={faEyeSlash} /> />
  }
  
  return (
    <label className={s.label}>
      <input 
        className={s.input} 
        type={type} 
        placeholder={placeholder} />
      {eyeIcon}
    </label>
    
  )
}

export {InputStandart}