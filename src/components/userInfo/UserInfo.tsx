import { ButtonStandart } from '../../ui/buttons/Button';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const navigate = useNavigate();
    const storedUser: string | null = localStorage.getItem('user');
    let userInfo = null;
    if (storedUser) {
        userInfo = JSON.parse(storedUser);
    }

    const loguout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem('user');
            navigate('/login');
            // Sign-out successful.
        });
    };

    return (
        <>
            <div> {userInfo ? `Аккаунт: ${userInfo.email}` : null} </div>
            <ButtonStandart callback={loguout}>Logout</ButtonStandart>
        </>
    );
};

export default UserInfo;
