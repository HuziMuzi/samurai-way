import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    followAC,
    initialStateTypeUsers, setCurrentPageAC, setTotalCountAC,
    setUsersAC, unfollowAC,
    UsersActionsTypes,
    userType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../img/VAyR.gif'

type usersPropsType = {
    users: Array<userType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    onClickPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <img/> :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onClickPage={this.onClickPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />

                }
            </>
        )
    }
}

const mapStateToProps = (state: AppRootState): initialStateTypeUsers => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionsTypes>) => {
    return {
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch((setTotalCountAC(totalCount)))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)