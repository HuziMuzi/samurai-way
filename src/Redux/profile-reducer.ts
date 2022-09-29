import React from "react";
import {PostDataType} from "../components/Profile/MyPost/MyPosts";
import {userType} from "./users-reducer";

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'

export type initialStateTypeProfile = {
    messageForNewPost: string
    posts: Array<PostDataType>
    profile : userType | null
}


let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 32},],
    profile: null
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
        default : {
            return state
        }
    }
}


export type ProfileActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangeNewTextAC> | ReturnType<typeof setUserProfile>

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