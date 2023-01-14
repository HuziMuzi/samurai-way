import {Dispatch} from "redux";
import {followUnfollowResponseType, userAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {updateObjectInArray} from "../utils/object-helpers";

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
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: initialStateTypeUsers = initialState, action: UsersActionsTypes): initialStateTypeUsers => {

    switch (action.type) {
        case "USERS/SET-USERS": {
            return {...state, users: action.users}
        }
        case "USERS/FOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userID,'id',{followed: true})
            }
        }
        case "USERS/UNFOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userID,'id',{followed: false})

            }
        }
        case "USERS/SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "USERS/SET-TOTAL-COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case "USERS/TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.valueFetching
            }
        }
        case "USERS/TOGGLE-FOLLOWING-PROGRESS": {
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


export type UsersActionsTypes = followUnfollowType
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingInProgress>


type followUnfollowType = ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess>

export type getUsers = ReturnType<typeof requestUsers>

export const setUsers = (users: Array<usersType>) => {
    return {
        type: 'USERS/SET-USERS',
        users
    } as const
}

export const followSuccess = (userID: number) => {
    return {
        type: 'USERS/FOLLOW',
        userID
    } as const
}

export const unfollowSuccess = (userID: number) => {
    return {
        type: 'USERS/UNFOLLOW',
        userID
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'USERS/SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setTotalCount = (totalCount: number) => {
    return {
        type: 'USERS/SET-TOTAL-COUNT',
        totalCount
    } as const
}

export const toggleIsFetching = (valueFetching: boolean) => {
    return {
        type: 'USERS/TOGGLE-IS-FETCHING',
        valueFetching
    } as const
}

export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'USERS/TOGGLE-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId : number) => Promise<followUnfollowResponseType>, actionCreator: (userId:number) => followUnfollowType) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const requestUsers: any = (currentPage: number, pageSize: number): AppThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    try {
        let response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalCount(response.totalCount))
    }
    catch (e){

    }

}


export const follow: any = (userId: number): AppThunkType => async (dispatch) => {
    let apiMethod = userAPI.postFollowUser.bind(userAPI)
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

}

export const unfollow : any = (userId: number): AppThunkType => async (dispatch) => {
    let apiMethod = userAPI.deleteUnfollowUser.bind(userAPI)
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)

}



