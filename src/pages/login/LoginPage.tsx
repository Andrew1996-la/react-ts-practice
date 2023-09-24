import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '../../components/form/Form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate('/');
            })
            .catch((error) => {
                alert('invalid user');
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
    return <Form title='Login' handleLogin={(email, password) => handleLogin(email, password)}/>;
};

export default LoginPage;
