import s from "./Users.module.css";
import userPhoto from "../../img/user-mule.png";
import React from "react";
import { usersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {User} from "./User";


type usersPropsType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress : number[]

    onClickPage: (n: number) => void
    follow: (userID: number) => any
    unfollow: (userID: number) => any
}

export const Users = ({followingInProgress,follow,unfollow, ...props}: usersPropsType) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);


    return (
        <div>
            <div className={s.numberPage}>
                {slicedPages.map(n => <span
                    onClick={() => {
                        props.onClickPage(n)}}
                    className={props.currentPage === n ? s.selectedPage : ''}>{n} </span>)}

            </div>
            {props.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow}/>
            )}
        </div>
    )
}