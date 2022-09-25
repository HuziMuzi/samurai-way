import React from 'react';
import {connect} from "react-redux";
// import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppRootState} from "../../Redux/redux-store";
import {Users} from "./Users";
import {
    followAC,
    initialStateTypeUsers, setCurrentPageAC, setTotalCountAC,
    setUsersAC, unfollowAC,
    UsersActionsTypes,
    userType
} from "../../Redux/users-reducer";



const mapStateToProps = (state:AppRootState) : initialStateTypeUsers=> {
    return {
        users: state.usersReducer.users,
        pageSize : state.usersReducer.pageSize,
        totalUsersCount : state.usersReducer.totalUsersCount,
        currentPage : state.usersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch<UsersActionsTypes>) => {
    return {
        setUsers : (users:Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        follow : (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow : (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setCurrentPage : (currentPage : number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount : (totalCount : number) => {
            dispatch((setTotalCountAC(totalCount)))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users)