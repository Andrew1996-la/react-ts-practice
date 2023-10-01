const UserInfo = () => {
    const storedUser: string | null = localStorage.getItem('user');
    let userInfo = null;
    if (storedUser) {
        userInfo = JSON.parse(storedUser);
    }

    return (
        <>
            <div> {userInfo ? `Аккаунт: ${userInfo.email}` : null} </div>
        </>
    );
};

export default UserInfo;
