import { getAuth, getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import { useAppDispatch } from '../../hooks';
import { createUser } from '../../store/userSlice';
import { handlerError } from '../../utils';
import { useState } from 'react';

const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogin = async (email: string, password: string): Promise<void> => {
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
            setErrorMessage(handlerError(error.code));
        }
    };

    return (
        <Form
            title='Login'
            errorMessage={errorMessage}
            handleLogin={(email: string, password: string) => handleLogin(email, password)}
        />
    );
};

export default LoginPage;
