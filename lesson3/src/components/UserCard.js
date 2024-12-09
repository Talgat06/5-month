import React from 'react';

const UserCard = ({userInfo}) => {
    return (
        <div className="userCard">
            <img src="" alt=""/>
            <p>{userInfo.name}</p>
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>
        </div>
    );
};

export default UserCard;