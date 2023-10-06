import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const isAuthUser = (): void => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: any): void => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            // Пользователь вошел в систему
            // Здесь можно обновить интерфейс или выполнить другие действия
        } else {
            localStorage.removeItem('user');
            // Пользователь вышел из системы или не вошел
        }
    });
};
