
import {AppThunkType} from "./redux-store";
import {authThunk} from "./auth-reducer";


export type initialStateTypeAuth = {
    initialized : boolean
    isFetching: boolean

}

let initialState = {
    initialized : false,
    isFetching: false
}

export const appReducer = (state: initialStateTypeAuth = initialState, action: appActionsTypes): initialStateTypeAuth => {
    switch (action.type) {
        case 'SET-INITIALIZED' : {
            return {
                ...state,
                initialized: true
            }
        }

        case "APP/SET-FETCHING":
            return {
                ...state, isFetching : action.value
            }

        default : {
            return state
        }
    }

}

export type appActionsTypes = setInitialized
type setInitialized = ReturnType<typeof initializedSuccess>
 | ReturnType<typeof setIsFetchingApp>

export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED'
    } as const
}

export const setIsFetchingApp = (value: boolean) => {
    return {
        type: 'APP/SET-FETCHING',
        value
    } as const
}

export const initializeAppThunk: any = () : AppThunkType =>  (dispatch) => {
   let a =  dispatch(authThunk())
    a.then(res => {
        dispatch(initializedSuccess())
    })
}
