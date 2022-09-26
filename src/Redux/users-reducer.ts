

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'

export type initialStateTypeUsers = {
    users: Array<userType>
    pageSize : number
    totalUsersCount : number
    currentPage : number
    isFetching : boolean
}

export type userType = {
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
    users: [],
    pageSize : 3,
    totalUsersCount : 0,
    currentPage : 2,
    isFetching : false
}

export const usersReducer = (state: initialStateTypeUsers = initialState, action: UsersActionsTypes): initialStateTypeUsers => {

    switch (action.type) {
        case "SET-USERS": {
            return {...state, users :action.users}
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
                users: state.users.map(user => user.id === action.userID ? {...user, followed : false} : user)
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-COUNT": {
            return  {
                ...state,
                totalUsersCount : action.totalCount
            }
        }
        default : {
            return state
        }
    }
}


export type UsersActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalCountAC>

export const setUsersAC = (users: Array<userType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    } as const
}
