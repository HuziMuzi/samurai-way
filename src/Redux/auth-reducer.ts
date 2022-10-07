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
    isAuth: true
}

export const authReducer = (state: initialStateTypeAuth = initialState, action: AuthLoginActionsTypes): initialStateTypeAuth => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {

                ...state,
                ...action.data,
                isAuth : true
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

export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login
        }
    } as const
}

export const secondAC = () => {
    return {
        type: 'sec'
    } as const
}

export const authThunk = () => {
    return (dispatch : Dispatch) => {
        authAPI.authMe().then((response) => {
            if(response.data.resultCode === 0) {
                let {id, login, email}= response.data.data
                if(id !== null && login !== null && email !== null) {
                    dispatch(setUserData(id, email, login))
                }
            }

        })
    }
}
