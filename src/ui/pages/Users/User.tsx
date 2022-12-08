import s from "./Users.module.css";
import userPhoto from "../../../img/user-mule.png";
import React from "react";
import { usersType} from "../../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../Pages";


type usersPropsType = {
    user: usersType
    followingInProgress: number[]
    follow: (userID: number) => any
    unfollow: (userID: number) => any

}

export const User = ({user,unfollow,follow, followingInProgress}: usersPropsType) => {
    return (
            <div>
                <span>
                    <div>
                        <NavLink to={`${PATH.profile}${user.id}`}>
                        <img src={user.photos.small !== null
                            ? user.photos.small
                            : userPhoto}
                             className={s.userPhoto} alt={'user'}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id ===user.id)}
                                      onClick={() => {unfollow(user.id)}}>unfollow me</button>
                            : <button disabled={followingInProgress.some(id => id ===user.id)}
                                      onClick={() => {follow(user.id)}}>follow me</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.status}</div>
                        <div>{user.followed}</div>
                    </span>
                    <span>
                        <div>{user.uniqueUrlName}</div>
                        <div></div>
                    </span>
                </span>
            </div>)
}