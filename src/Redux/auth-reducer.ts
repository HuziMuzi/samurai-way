import {DialogsDataType, MessageDataType} from "../components/Dialogs/Dialogs";


export type userAuth = {
    id: number | null,
    login: string | null
    email: string | null
}

export type initialStateTypeAuth = {
    id: number | null,
    login: string | null
    email: string | null
    // data: userAuth,
    // messages: [],
    // fieldsErrors: [],
    // resultCode: number
    isFetching: boolean
    isAuth: boolean
}

let initialState = {
    // data: {
    id: null,
    login: null,
    email: null,
    // },
    // messages: [],
    // fieldsErrors: [],
    // resultCode: 0,
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
