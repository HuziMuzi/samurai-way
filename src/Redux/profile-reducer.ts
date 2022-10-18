import React from "react";
import {PostDataType} from "../components/Profile/MyPost/MyPosts";
import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";


export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'


export type userType = {
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
export type initialStateTypeProfile = {
    messageForNewPost: string
    posts: Array<PostDataType>
    profile: userType | null
    status: string
}


let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 32},],
    profile: null,
    status: ''
}

export const profileReducer = (state: initialStateTypeProfile = initialState, action: ProfileActionsTypes): initialStateTypeProfile => {

    switch (action.type) {
        case CHANGE_NEW_TEXT : {
            // state.messageForNewPost = action.newText
            return {...state, messageForNewPost: action.newText}
        }
        case ADD_POST : {
            const newPost: PostDataType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 1
            }
            return {...state, posts: [newPost, ...state.posts], messageForNewPost: ''}
        }

        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SET-STATUS" : {
            return {
                ...state,
                status: action.status
            }
        }
        default : {
            return state
        }
    }
}


export type ProfileActionsTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof ChangeNewTextAC> | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

export const AddPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const ChangeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

export const setUserProfile = (profile: userType) => {
    return {
        type: "SET-USER-PROFILE", profile
    } as const
}


export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS", status
    } as const
}

export const getProfileThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        userAPI.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data))
        })
    }
}


export const getUserStatusThunk = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data))
    })
}

export const updateUserStatusThunk = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
