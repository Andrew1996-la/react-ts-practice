import TodoList from './todoList/TodoList'
import ControlPanel from './controlPanel/ControlPanel'
import LoginForm from './loginForm/LoginForm'

import s from './app.module.css';

const App: React.FC = () => {
    return (
        <div className={s.appContainer}>
            {/* <LoginForm /> */}
            <ControlPanel />
            <TodoList/>
        </div>
    )
}

export default App