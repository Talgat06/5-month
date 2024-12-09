import React from 'react';
import {useSelector} from "react-redux";

const UserList = () => {
    const { loading, users, error } = useSelector(state => state.usersReducer)

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <ul className="user-list">
            {users.map((user) => (
                <li key={user.id} className="user-item">
                    <img src={user.avatar_url} alt={user.login}/>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        {user.login}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default UserList;