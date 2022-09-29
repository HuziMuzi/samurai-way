

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
    // name: string
    // id: number
    // uniqueUrlName: null
    // photos: {
    //     small: string
    //     large: string
    // }
    // status: string
    followed: boolean

    aboutMe: string
    contacts: {
        facebook: string
        website: null,
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }

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
                users: state.users.map(user => user.userId === action.userID ? {...user, followed: true} : user)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.userId === action.userID ? {...user, followed : false} : user)
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
        case "TOGGLE-IS-FETCHING": {
            return  {
                ...state,
                isFetching: action.valueFetching
            }
        }
        default : {
            return state
        }
    }
}


export type UsersActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalCount>
| ReturnType<typeof toggleIsFetching>

export const setUsers = (users: Array<userType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}

export const unfollow = (userID: number) => {
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