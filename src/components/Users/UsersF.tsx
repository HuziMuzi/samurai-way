import React from 'react';
import {userType} from "../../Redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/Dx-8TiWX0AAZOpw.jpeg'

type usersPropsType = {
    users: Array<userType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void

}

export const UsersF = (props: usersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    props.setUsers(response.data.items)
                })
        }
    }
    return (
        <div>
            {/*<button onClick={getUsers}>get users</button>*/}
            {/*{props.users.map(user => <div key={user.id}>*/}
            {/*    <span>*/}
            {/*        <div>*/}
            {/*            <img src={user.photos.small !== null*/}
            {/*                ? user.photos.small*/}
            {/*                : userPhoto}*/}
            {/*                 className={s.userPhoto}/>*/}
            {/*        </div>*/}
            {/*        <div>{*/}
            {/*            user.followed*/}
            {/*                ? <button onClick={() => {*/}
            {/*                    props.unfollow(user.id)*/}
            {/*                }}>unfollow me</button>*/}
            {/*                : <button onClick={() => {*/}
            {/*                    props.follow(user.id)*/}
            {/*                }}>follow me</button>*/}
            {/*        }*/}
            {/*        </div>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <span>*/}
            {/*            <div>{user.name}</div>*/}
            {/*            <div>{user.status}</div>*/}
            {/*        </span>*/}
            {/*        <span>*/}
            {/*            <div>{user.status}</div>*/}
            {/*            <div></div>*/}
            {/*        </span>*/}
            {/*    </span>*/}
            {/*</div>)}*/}
        </div>
    );
};

