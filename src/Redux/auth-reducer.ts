import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type userAuth = {
    id: number | null,
    login: string | null
    email: string | null
}

export type initialStateTypeAuth = {
    id: number | null,
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: initialStateTypeAuth = initialState, action: AuthLoginActionsTypes): initialStateTypeAuth => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {

                ...state,
                ...action.payload,
            }
        }
        default : {
            return state
        }
    }

}

export type AuthLoginActionsTypes = setUserDataACType | SendMessageAC
type setUserDataACType = ReturnType<typeof setUserData>
type SendMessageAC = ReturnType<typeof secondAC>

export const setUserData = (id: number| null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const secondAC = () => {
    return {
        type: 'sec'
    } as const
}

export const authThunk = () => (dispatch : Dispatch) => {
        authAPI.authMe().then((response) => {
            if(response.data.resultCode === 0) {
                let {id, login, email}= response.data.data
                if(id !== null && login !== null && email !== null) {
                    dispatch(setUserData(id, email, login, true))
                }
            }
        })
}

export const LoginThunk = (email:string,password: string, rememberMe:boolean) => {
    return (dispatch : any) => {
        authAPI.login(email,password,rememberMe).then((response) => {
            if(response.data.resultCode === 0) {
               dispatch(authThunk())
            }
        })
    }
}

export const LogoutThunk = () => {
    return (dispatch : any) => {
        authAPI.logOut().then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}