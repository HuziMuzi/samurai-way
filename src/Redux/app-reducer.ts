
import {AppThunkType} from "./redux-store";
import {authThunk} from "./auth-reducer";


export type initialStateTypeAuth = {
    initialized : boolean
}

let initialState = {
    initialized : false
}

export const appReducer = (state: initialStateTypeAuth = initialState, action: appActionsTypes): initialStateTypeAuth => {
    switch (action.type) {
        case 'SET-INITIALIZED' : {
            return {

                ...state,
                initialized: true
            }
        }
        default : {
            return state
        }
    }

}

export type appActionsTypes = setInitialized
type setInitialized = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED'
    } as const
}


export const initializeAppThunk = () : AppThunkType =>  (dispatch) => {
   let a =  dispatch(authThunk())
    a.then(res => {
        dispatch(initializedSuccess())
    })
}
