import { createUserWithEmailAndPassword, getAuth, getIdToken } from 'firebase/auth';
import Form from '../../components/form/Form';
import { useAppDispatch } from '../../hooks';
import { createUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        let userEmail: string | null;
        let userUid: string | null;
        createUserWithEmailAndPassword(auth, email, password)
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
                        email: userEmail,
                        token: idToken,
                        id: userUid,
                    })
                );
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <Form
            title='Registration'
            handleRegister={(email, password) => handleRegister(email, password)}
        />
    );
};

export default RegistrationPage;
