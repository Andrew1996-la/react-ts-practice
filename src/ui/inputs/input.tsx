import { IInputStandart } from "../../types/props"

import s from "./input.module.css"

const InputStandart: React.FC<IInputStandart> = ({type, placeholder}) => {
  return (
    <input 
      className={s.input} 
      type={type} 
      placeholder={placeholder} />
  )
}

export {InputStandart}