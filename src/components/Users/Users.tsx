import React from 'react';
import {userType} from "../../Redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../img/user-mule.png'

type usersPropsType = {
    users: Array<userType>
    totalUsersCount : number
    pageSize : number
    currentPage : number

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage : (currentPage : number) => void
    setTotalCount: (totalCount : number) => void
}


export class Users extends React.Component<usersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                // console.log(response.data.totalCount)
            })
    }


    onClickPage (pageNumber:number) {

        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response)=> {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <=pageCount; i++) {
            pages.push(i)
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);


         return (
             <div>
                 <div>
                     {slicedPages.map(n => <span
                         onClick={()=>{this.onClickPage(n)}}
                         className={this.props.currentPage === n ? s.selectedPage : ''}>{n} </span>)}

                 </div>
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


