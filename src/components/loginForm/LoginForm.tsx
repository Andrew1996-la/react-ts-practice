const LoginForm = () => {
  return (
    <form>
        <label>
            <input type="text" placeholder="Введите логин"/>
        </label>

        <label>
            <input type="text" placeholder="Введите пароль"/>
        </label>

        <button>login</button>    
    </form>
  )
}

export default LoginForm