import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {navbarActionsType, navbarReducer} from "./navbar-reducer";
import {UsersActionsTypes, usersReducer} from "./users-reducer";
import {AuthLoginActionsTypes, authReducer} from "./auth-reducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {appActionsTypes, appReducer} from "./app-reducer";


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

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleWare)));
// export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export type ActionsType =
    AuthLoginActionsTypes
    | DialogsActionsTypes
    | navbarActionsType
    | ProfileActionsTypes
    | UsersActionsTypes
    | appActionsTypes

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ActionsType>


// @ts-ignore
window.store = store