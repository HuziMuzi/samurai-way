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
    isFetching: false
}

export const authReducer = (state: initialStateTypeAuth = initialState, action: DialogsActionsTypes): initialStateTypeAuth => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {
                ...state,
                ...action.data
            }
        }
        default : {
            return state
        }
    }

}

export type DialogsActionsTypes = setUserDataACType | SendMessageAC
type setUserDataACType = ReturnType<typeof setUserData>
type SendMessageAC = ReturnType<typeof secondAC>

export const setUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId,
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
