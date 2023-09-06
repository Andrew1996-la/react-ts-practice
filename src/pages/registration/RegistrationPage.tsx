import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Form from '../../components/form/Form';

const RegistrationPage = () => {

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return <Form title='Registration' handleRegister={(email, password) => handleRegister(email, password)}/>;
};

export default RegistrationPage;
