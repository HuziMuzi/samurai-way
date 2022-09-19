import React from "react";
import {PostDataType} from "../components/Profile/MyPost/MyPosts";

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT'

type initialStateType = {
    messageForNewPost: string
    posts: Array<PostDataType>
}


let inicialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 32},]
}

export const profileReducer = (state:initialStateType = inicialState, action: ProfileActionsTypes) : initialStateType => {

    switch (action.type) {
        case CHANGE_NEW_TEXT : {
            state.messageForNewPost = action.newText
            return state
        }
        case ADD_POST : {
            const newPost: PostDataType = {
                id: 5,
                message: state.messageForNewPost,
                // message: state.messageForNewPost,
                likesCount: 1
            }
            state.posts.push(newPost)
            state.messageForNewPost = '' //?

            return state
        }

        default : {
            return state
        }
    }
}


export type ProfileActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangeNewTextAC>

export const AddPostAC = (message: string) => {
    return {
        type: ADD_POST,
        postMessage: message
    } as const
}

export const ChangeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}
