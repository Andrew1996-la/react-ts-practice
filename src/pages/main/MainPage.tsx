import ControlPanel from "../../components/controlPanel/ControlPanel"
import TodoList from "../../components/todoList/TodoList"

const MainPage: React.FC = () => {
  return (
    <>
        <ControlPanel />
        <TodoList/>
    </>
  )
}

export default MainPage