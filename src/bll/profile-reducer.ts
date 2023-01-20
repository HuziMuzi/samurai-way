import {PostDataType} from "../ui/pages/Profile/MyPost/MyPosts";
import {profileAPI, userAPI} from "../dal/api";
import {AppThunkType} from "./redux-store";
import {setIsFetchingApp} from "./app-reducer";
import {TActiveProfile} from "../ui/pages/Settings/Settings";
import {v1} from "uuid";


export const ADD_POST = 'ADD-POST'


export type userType = {
    aboutMe?: string
    contacts: {
        facebook: string
        website: string,
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId?: number
    photos?: {
        small: string | null
        large: string | null
    }
}
export type initialStateTypeProfile = {
    posts: Array<PostDataType>
    profile: userType
    status: string
}


let initialState = {
    posts: [
        {id: v1(), message: 'Hi,how are you?', likesCount: 5},
        {id: v1(), message: "It's my first post", likesCount: 32},],
    profile:
        {
            aboutMe: '',
            contacts: {},
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
            photos: {
                small: null,
                large: null,
            }
        } as userType,
    status: ''
}

export const profileReducer = (state: initialStateTypeProfile = initialState, action: ProfileActionsTypes): initialStateTypeProfile => {

    switch (action.type) {
        case ADD_POST : {
            const newPost: PostDataType = {
                id: v1(),
                message: action.value,
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
            return {
                ...state,
                // posts: state.posts.filter(post => post.id !== action.id)
            }
        case "PROF/SET-PHOTOS":
            console.log(action.photos)
            return {
                ...state, profile: {...state.profile, photos: action.photos}
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
    | ReturnType<typeof setPhotoSuccesses>

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

export const setPhotoSuccesses = (photos: { large: string, small: string }) => {
    return {
        type: "PROF/SET-PHOTOS", photos
    } as const
}

export const getProfileThunk: any = (userId: string): AppThunkType => async (dispatch) => {
    dispatch(setIsFetchingApp(true))
    try {
        let response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response))
        return response
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setIsFetchingApp(false))

    }


}


export const getUserStatusThunk: any = (userId: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateUserStatusThunk: any = (status: string): AppThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export const savePhotoThunk: any = (file: any): AppThunkType => async (dispatch) => {
    dispatch(setIsFetchingApp(true))
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        console.log(response.data)
        dispatch(setPhotoSuccesses(response.data.data.photos))
        dispatch(setIsFetchingApp(false))
    }
}

export const saveProfile: any = (values: TActiveProfile): AppThunkType => async (dispatch) => {
    dispatch(setIsFetchingApp(true))
    try {
        await profileAPI.saveProfile(values)
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setIsFetchingApp(false))

    }

}
