import { LoginRegisterError } from './enams';
export const uniqueId = () => Date.now() * Math.random();

export const handlerError = (error: string): string | null => {
    switch (error) {
        case LoginRegisterError.INVALID_EMAIL:
            return 'Введенный email имеет неправильный формат';
        case LoginRegisterError.EMAIL_ALREADY_IN_USE:
            return 'Пользователь с email-адресом, который уже зарегистрирован';
        case LoginRegisterError.OPERATION_NOT_ALLOWED:
            return 'Пользователь заблокирован';
        case LoginRegisterError.WEEK_PASSWORD:
            return 'Пароль слишком слабый';
        case LoginRegisterError.TOO_MANY_REQUESTS:
            return 'Слишком много неудачных попыток входа в систему, попробуйте позже';
        case LoginRegisterError.USER_NOT_FOUND:
            return 'Пользователь с указанным email не был найден';
        case LoginRegisterError.WRONG_PASSWORD:
            return 'Неправильный пароль';
        default:
            return null;
    }
};
