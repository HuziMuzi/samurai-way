import React from "react";
import {PostDataType} from "../components/Profile/MyPost/MyPosts";

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'

export type initialStateTypeUsers = {
    users: Array<userType>
}


type userType = {
    id: number
    folowed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

let initialState = {
    users: [
        // {
        //     id: 1,
        //     folowed: true,
        //     fullName: 'Andrei Davidovich',
        //     status: "I'm a bosss",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     folowed: false,
        //     fullName: 'Darya Davidovich',
        //     status: "I'm a smoll bosss",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // }
    ]
}

export const usersReducer = (state: initialStateTypeUsers = initialState, action: UsersActionsTypes): initialStateTypeUsers => {

    switch (action.type) {
        case "SET-USERS": {
            return {...state, users : [...state.users, ...action.users]}
        }
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, folowed: true} : user)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, folowed : false} : user)
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


