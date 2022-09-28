import s from "./Users.module.css";
import userPhoto from "../../img/user-mule.png";
import React from "react";
import {userType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";


type usersPropsType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number

    onClickPage: (n: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void

}

export const Users = (props: usersPropsType) => {

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
            <div>
                {slicedPages.map(n => <span
                    onClick={() => {
                        props.onClickPage(n)
                    }}
                    className={props.currentPage === n ? s.selectedPage : ''}>{n} </span>)}

            </div>
            {props.users.map(u => <div key={u.id}>
                <span key={u.id}>
                    <div>
                        <NavLink to={`/profile/user${u.id}`}>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto}
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>{
                        u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow me</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow me</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.status}</div>
                        <div></div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}