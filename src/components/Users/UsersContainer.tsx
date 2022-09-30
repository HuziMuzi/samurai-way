import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    follow,
    initialStateTypeUsers, setCurrentPage, setTotalCount,
    setUsers, toggleIsFetching, unfollow,

    usersType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../commen/ Preloader/Preloader";

type usersPropsType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (valueFetching: boolean) => void
}

export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    onClickPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    :
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

// const mapDispatchToProps = (dispatch: Dispatch<UsersActionsTypes>) => {
//     return {
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    setUsers, follow, unfollow, setCurrentPage, setTotalCount, toggleIsFetching
})(UsersContainer)