import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    initialStateTypeUsers,
    setUsersAC, unfollowAC,
    UsersActionsTypes,
    usersReducer,
    userType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {AppRootState} from "../../Redux/redux-store";

// export const Users = () => {
//     return (
//         <div>
//             users will be here
//         </div>
//     );
// };


// const
const mapStateToProps = (state:AppRootState) : initialStateTypeUsers=> {
    return {
        users: state.usersReducer.users
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
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users)