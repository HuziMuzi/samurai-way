import {PostDataType} from "../components/Profile/MyPost/MyPosts";
import {profileAPI, userAPI} from "../api/api";
import {AppThunkType} from "./redux-store";


export const ADD_POST = 'ADD-POST'


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
    posts: Array<PostDataType>
    profile: userType | null
    status: string
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 32},],
    profile: null,
    status: ''
}

export const profileReducer = (state: initialStateTypeProfile = initialState, action: ProfileActionsTypes): initialStateTypeProfile => {

    switch (action.type) {
        case ADD_POST : {
            const newPost: PostDataType = {
                id: 5,
                message:action.value,
                likesCount: 1
            }
            return {...state, posts: [newPost, ...state.posts]}
        }

        case "PROF/SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "PROF/SET-STATUS" : {
            return {
                ...state,
                status: action.status
            }
        }
        case "PROF/DELETE-POST":
            return  {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        default : {
            return state
        }
    }
}


export type ProfileActionsTypes = ReturnType<typeof AddPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

export const AddPostAC = (value: string) => {
    return {
        type: ADD_POST, value
    } as const
}

export const setUserProfile = (profile: userType) => {
    return {
        type: "PROF/SET-USER-PROFILE", profile
    } as const
}

export const deletePost = (id: number) => {
    return {
        type: "PROF/DELETE-POST", id
    } as const
}


export const setStatus = (status: string) => {
    return {
        type: "PROF/SET-STATUS", status
    } as const
}

export const getProfileThunk = (userId: string) : AppThunkType => async (dispatch) => {
      let response = await userAPI.getProfile(userId)
            dispatch(setUserProfile(response))
    }



export const getUserStatusThunk = (userId: string) :AppThunkType => async (dispatch) => {
  let response = await  profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateUserStatusThunk = (status: string) : AppThunkType => async (dispatch) => {
 let response =  await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}
