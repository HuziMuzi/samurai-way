import s from "./Users.module.css";
import userPhoto from "../../img/user-mule.png";
import React from "react";
import {usersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {log} from "util";
import axios from "axios";


type usersPropsType = {
    users: Array<usersType>
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
    console.log()
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

                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto}
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>{
                        u.followed
                            ? <button onClick={() => {


                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'cd84ec38-7dd0-454d-922d-422564e79a88'
                                            }
                                        }
                                    )
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            console.log(response)
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>unfollow me</button>


                            : <button onClick={() => {
                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                        {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'cd84ec38-7dd0-454d-922d-422564e79a88'
                                            }
                                        }
                                    )
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            console.log(response)
                                            props.unfollow(u.id)
                                        }
                                    })

                                props.follow(u.id)
                            }

                            }>follow me</button>
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