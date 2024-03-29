import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {navbarActionsType, navbarReducer} from "./navbar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";
import {AuthLoginActionsTypes, authReducer} from "./auth-reducer";
import  {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {appActionsTypes, appReducer} from "./app-reducer";
import thunk from 'redux-thunk'


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    navbarReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
})


export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type ActionsType =
    AuthLoginActionsTypes
    | DialogsActionsTypes
    | navbarActionsType
    | ProfileActionsTypes
    | UsersActionsTypes
    | appActionsTypes

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ActionsType>

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;


// @ts-ignore
window.store = store