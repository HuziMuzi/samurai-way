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


export class Users extends React.Component<usersPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
         return (
             <div>
                 {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : userPhoto}
                             className={s.userPhoto}/>
                    </div>
                    <div>{
                        u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>unfollow me</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}


