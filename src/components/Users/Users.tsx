import React from 'react';
import {userType} from "../../Redux/users-reducer";
import s from './Users.module.css'

type usersPropsType = {
    users: Array<userType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void

}

export const Users = (props: usersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.pikpng.com/pngl/m/2-20183_guy-png-picture-person-with-glasses-png-clipart.png',
                followed: true,
                fullName: 'Andrei Davidovich',
                status: "I'm a bosss",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://celebsdaddy.net/wp-content/uploads/2018/09/MV5BMTY4ODY0MmYtZjFlYS00MmUyLTliMjktYThkNGQxZjY0N2U0XkEyXkFqcGdeQXVyNDU1MzUzMDc@._V1_.jpg',
                followed: false,
                fullName: 'Darya Davidovich',
                status: "I'm a smoll bosss",
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ])
    }
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>{
                        user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>unfollow me</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>follow me</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

