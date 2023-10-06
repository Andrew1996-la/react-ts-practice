import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import s from './userInfo.module.css';
import logoutIcon from '../../img/logout.svg';

const UserInfo = () => {
    const navigate = useNavigate();
    const storedUser: string | null = localStorage.getItem('user');
    let userInfo = null;
    if (storedUser) {
        userInfo = JSON.parse(storedUser);
    }

    const logout = (): void => {
        const auth = getAuth();
        signOut(auth).then((): void => {
            localStorage.removeItem('user');
            navigate('/login');
        });
    };

    return (
        <div className={s.wrapper}>
            <span className={s.userName}>{userInfo ? `Аккаунт: ${userInfo.email}` : null}</span>
            <img className={s.logoutIcon} alt='logout' onClick={logout} src={logoutIcon} />
        </div>
    );
};

export default UserInfo;
