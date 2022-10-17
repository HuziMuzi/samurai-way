import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type initialStateTypeUsers = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type usersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4000,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: initialStateTypeUsers = initialState, action: UsersActionsTypes): initialStateTypeUsers => {

    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.valueFetching
            }
        }
        case "TOGGLE-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default : {
            return state
        }
    }
}


export type UsersActionsTypes = ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingInProgress>


export type getUsers = ReturnType<typeof getUsers>

export const setUsers = (users: Array<usersType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const followSuccess = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowSuccess = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    } as const
}

export const toggleIsFetching = (valueFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        valueFetching
    } as const
}

export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
    }
}


export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))

        userAPI.postFollowUser(userId)
            .then((data) => {
            if (data.resultCode == 0) {
                debugger
                dispatch(followSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))

        userAPI.deleteUnfollowUser(userId)
            .then((data) => {
                console.log(userId)
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))}
                dispatch(toggleFollowingInProgress(false, userId))

            })
    }
}



