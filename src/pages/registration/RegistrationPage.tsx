import { ButtonStandart } from "../../ui/buttons/Button"
import { InputStandart, InputPassword } from "../../ui/inputs/input"
import s from './registrationPage.module.css'

const RegistrationPage = () => {
  return (
      <form className={s.registrationForm} >
        <h2 className={s.registration}>Зарегистрироваться!</h2> 
        <InputStandart type="text" placeholder="введите логин" />
        <InputPassword type="password" placeholder="введите пароль"/>
        <ButtonStandart>Registrtion</ButtonStandart>
      </form>  )
}

export default RegistrationPage