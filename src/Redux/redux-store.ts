import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {navbarActionsType, navbarReducer} from "./navbar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";
import {AuthLoginActionsTypes, authReducer} from "./auth-reducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    navbarReducer,
    usersReducer,
    authReducer,
    form: formReducer
})


export type AppRootState = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export type ActionsType =
    AuthLoginActionsTypes
    | DialogsActionsTypes
    | navbarActionsType
    | ProfileActionsTypes
    | UsersActionsTypes

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ActionsType>


// @ts-ignore
window.store = store