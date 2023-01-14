import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
        case 'AUTH/SET-USER-DATA' : {
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

export type AuthLoginActionsTypes = setUserDataACType
type setUserDataACType = ReturnType<typeof setUserData>

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'AUTH/SET-USER-DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}



export const authThunk = () => async (dispatch: Dispatch) => {
    let response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            if (id !== null && login !== null && email !== null) {
                dispatch(setUserData(id, email, login, true))
            }
        }
}

export const LoginThunk: any = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
       let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                let action = stopSubmit('Login', {_error: message})
                dispatch(action)
            }
}

export const LogoutThunk : any = () => async (dispatch: Dispatch) => {
    try {
        let response =  await authAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
    catch (e)  {

    }

}
