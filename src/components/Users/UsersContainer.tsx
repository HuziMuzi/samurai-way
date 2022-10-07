import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    follow, getUsers, initialStateTypeUsers,
    setCurrentPage, unfollow, usersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../commen/ Preloader/Preloader";

type usersPropsType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

    setCurrentPage: (currentPage: number) => void
    // toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (pageSize: number, currentPage: number) => any
    follow : (userId : number) => any
    unfollow : (userId : number) => any
}


export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalCount(data.totalCount)
        //     })
    }

    onClickPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
        // userAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
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
                        // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                        followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
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
    follow, unfollow, setCurrentPage, getUsers
})(UsersContainer)

// toggleFollowingInProgress,