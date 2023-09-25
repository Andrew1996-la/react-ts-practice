import { getAuth, getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import { useAppDispatch } from '../../hooks';
import { createUser } from '../../store/userSlice';
import { localStorageSetUser } from '../../localstorage';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        let userEmail: string | null;
        let userUid: string | null;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const { email, uid } = user;
                userEmail = email;
                userUid = uid;
                return getIdToken(user);
            })
            .then((idToken) => {
                dispatch(
                    createUser({
                        isAuth: true,
                        email: userEmail,
                        token: idToken,
                        id: userUid,
                    })
                );
                navigate('/');
            })
            .catch((error) => {
                alert('invalid user');
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
    return <Form title='Login' handleLogin={(email, password) => handleLogin(email, password)} />;
};

export default LoginPage;
