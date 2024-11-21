import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UserView = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            <h2>List of users</h2>
            {user.loading && <div>Loading</div>}
            {user.error && <div>Error while loading</div>}
            {user.users && (
                <div>
                    <ul>
                        {user.users.map((user) => (
                            <li key={user.id}>{user.username}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default UserView;
