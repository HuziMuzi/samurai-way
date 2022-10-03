
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
