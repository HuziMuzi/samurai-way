import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    follow, initialStateTypeUsers, requestUsers,
    setCurrentPage, unfollow, usersType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/ Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../Redux/users-selectors";

type usersPropsType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

    setCurrentPage: (currentPage: number) => void
    requestUsers: (pageSize: number, currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export class UsersContainer extends React.Component<usersPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state: AppRootState): initialStateTypeUsers => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose <React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, requestUsers}),
    // withAuthRedirect,
)(UsersContainer)


// connect(mapStateToProps, {
//     follow, unfollow, setCurrentPage, getUsers
// })(UsersContainer)
