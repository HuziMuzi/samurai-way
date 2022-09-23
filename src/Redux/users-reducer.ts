import React from "react";
import {PostDataType} from "../components/Profile/MyPost/MyPosts";

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'

export type initialStateTypeUsers = {
    users: Array<userType>
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
    users: []
}

export const usersReducer = (state: initialStateTypeUsers = initialState, action: UsersActionsTypes): initialStateTypeUsers => {

    switch (action.type) {
        case "SET-USERS": {
            return {...state, users : [...state.users, ...action.users]}
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
        default : {
            return state
        }
    }
}


export type UsersActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

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


