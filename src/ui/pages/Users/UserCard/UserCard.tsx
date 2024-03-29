import s from './UserCard.module.css'
import userPhoto from "../../../../img/user-mule.png";
import React from "react";
import {usersType} from "../../../../bll/users-reducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../Pages";
import Button from "../../../components/common/Button/Button";


type usersPropsType = {
    user: usersType
    followingInProgress: number[]
    follow: (userID: number) => any
    unfollow: (userID: number) => any

}

export const UserCard = ({user, unfollow, follow, followingInProgress}: usersPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.boxHeader}>
                <div className={s.userPhoto}>
                    <NavLink to={`${PATH.profile}${user.id}`}>
                        <img src={user.photos.small !== null
                            ? user.photos.small
                            : userPhoto}
                             className={s.userPhoto} alt={'user'}/>
                    </NavLink>
                </div>
                <div className={s.userName}>{user.name}</div>
            </div>
            <div className={s.boxContent}>
                <div className={s.description}>
                    <div>{user.status ? user.status : 'the user is silent'}</div>
                </div>
                <div className={s.btnFollow}>
                    {
                        user.followed
                            ? <Button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>unfollow me</Button>
                            : <Button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>follow me</Button>
                    }
                </div>
            </div>

        </div>
    )
}
