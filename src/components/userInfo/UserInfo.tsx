import { useAppSelector } from '../../hooks';

const UserInfo = () => {
    const userName: null | string = useAppSelector((store) => store.user.email);
    return (
        <>
         <div>{userName}</div>
        </>
    );
};

export default UserInfo;
