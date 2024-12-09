import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/reducers/actions";
import UserCard from "../../components/UserCard";

const UsersPage = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    console.log(users)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    useEffect(() => {
        getUsers()
    },[])

    return (
        <div>
            {/*<button onClick={getUsers}>Get users</button>*/}
            <div className="cardsBlock">
                {users.map(user => <UserCard userInfo={user} />)}
            </div>
        </div>
    );
};

export default UsersPage;