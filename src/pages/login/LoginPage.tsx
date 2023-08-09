import { InputStandart, InputPassword } from "../../ui/inputs/input"
import { ButtonStandart } from "../../ui/buttons/Button"

import s from './loginPage.module.css'

const LoginPage = () => {

  return (
      <form className={s.loginForm} >
        <h2 className={s.greeting}>Добро пожаловть!</h2> 
        <InputStandart type="text" placeholder="введите логин" />
        <InputPassword type="password" placeholder="введите пароль"/>
        <ButtonStandart>Login</ButtonStandart>
      </form>
  )
}

export default LoginPage