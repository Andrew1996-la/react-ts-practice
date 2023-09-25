import UserInfo from '../../components/userInfo/UserInfo';
import ControlPanel from '../../components/controlPanel/ControlPanel';
import TodoList from '../../components/todoList/TodoList';

const MainPage: React.FC = () => {
    return (
        <>
            <UserInfo />
            <ControlPanel />
            <TodoList />
        </>
    );
};

export default MainPage;
