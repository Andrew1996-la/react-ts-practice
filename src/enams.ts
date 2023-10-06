export const enum LoginRegisterError {
    USER_NOT_FOUND = 'auth/user-not-found',
    WRONG_PASSWORD = 'auth/wrong-password',
    INVALID_EMAIL = 'auth/invalid-email',
    TOO_MANY_REQUESTS = 'auth/too-many-requests',
    WEEK_PASSWORD = 'auth/weak-password',
    EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
    OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed',
}
