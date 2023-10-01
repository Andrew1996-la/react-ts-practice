import ControlPanel from '../../components/controlPanel/ControlPanel';
import TodoList from '../../components/todoList/TodoList';
import UserInfo from '../../components/userInfo/UserInfo';
import { isAuthUser } from '../../firebaseConfig';

const MainPage: React.FC = () => {
    isAuthUser();

    return (
        <>
            <UserInfo />
            <ControlPanel />
            <TodoList />
        </>
    );
};

export default MainPage;
