import { getAuth, getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import { useAppDispatch } from '../../hooks';
import { createUser } from '../../store/userSlice';
import { handlerError } from '../../utils';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogin = async (email: string, password: string) => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const { email: userEmail, uid: userUid } = user;

            const idToken: string = await getIdToken(user);

            dispatch(
                createUser({
                    isAuth: true,
                    email: userEmail,
                    token: idToken,
                    id: userUid,
                })
            );
            navigate('/');
        } catch (error: any) {
            handlerError(error.code);
        }
    };

    return <Form title='Login' handleLogin={(email, password) => handleLogin(email, password)} />;
};

export default LoginPage;
