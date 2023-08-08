import { InputStandart } from "../../ui/inputs/input"
import { ButtonStandart } from "../../ui/buttons/Button"

import s from './loginForm.module.css'

const LoginForm = () => {
  return (
      <form className={s.loginForm} >
        <h2 className={s.greeting}>Добро пожаловть!</h2> 
            <InputStandart type="text" placeholder="введите логин" />
            <InputStandart type="password" placeholder="введите пароль" />
          <ButtonStandart>Login</ButtonStandart>
      </form>
  )
}

export default LoginForm