import ControlPanel from '../../components/controlPanel/ControlPanel';
import TodoList from '../../components/todoList/TodoList';
import UserInfo from '../../components/userInfo/UserInfo';
import { isAuthUser } from '../../firebaseConfig';
import { Navigate } from 'react-router-dom';

const MainPage: React.FC = () => {
    isAuthUser();

    const isAuthorized = localStorage.getItem('user');

    return (
        <>
            {isAuthorized ? (
                <>
                    <UserInfo />
                    <ControlPanel />
                    <TodoList />
                </>
            ) : (
                <Navigate to={'/login'} />
            )}
        </>
    );
};

export default MainPage;
