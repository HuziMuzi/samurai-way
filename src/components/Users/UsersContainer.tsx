import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    follow,
    initialStateTypeUsers, setCurrentPage, setTotalCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow,

    usersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../commen/ Preloader/Preloader";
import {userAPI} from "../../api/api";

type usersPropsType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress : number[]

    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (valueFetching: boolean) => void
    toggleFollowingInProgress: (isFetching : boolean, userId:number) => void
}



export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onClickPage = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        //         {
        //             withCredentials: true
        //         })
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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
                        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
        followingInProgress : state.usersReducer.followingInProgress
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
    setUsers, follow, unfollow, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer)