import s from "./Users.module.css";
import userPhoto from "../../img/user-mule.png";
import React from "react";
import { usersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";


type usersPropsType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress : number[]

    onClickPage: (n: number) => void
    follow: (userID: number) => any
    unfollow: (userID: number) => any
    // toggleFollowingInProgress: (isFetching: boolean, userId : number) => void
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
            <div className={s.numberPage}>
                {slicedPages.map(n => <span
                    onClick={() => {
                        props.onClickPage(n)}}
                    className={props.currentPage === n ? s.selectedPage : ''}>{n} </span>)}

            </div>
            {props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto}
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id ===u.id)}  onClick={() => {
                                props.unfollow(u.id)
                                // props.toggleFollowingInProgress(true,u.id)
                                // userAPI.deleteUnfollowUser(u.id)
                                //     .then((data) => {
                                //         if (data.resultCode === 0) {
                                //             props.unfollow(u.id)}
                                //         props.toggleFollowingInProgress(false,u.id)
                                //     })
                            }}>unfollow me</button>

                            : <button disabled={props.followingInProgress.some(id => id ===u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                          // props.toggleFollowingInProgress(true,u.id)
                                          // userAPI.postFollowUser(u.id).then((data) => {
                                          //     if (data.resultCode === 0) {
                                          //         props.follow(u.id)}
                                          //     props.toggleFollowingInProgress(false,u.id)
                                          // })
                                          // props.follow(u.id)
                                      }}>follow me</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.status}</div>
                        <div>{u.followed}</div>
                    </span>
                    <span>
                        <div>{u.uniqueUrlName}</div>
                        <div></div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}