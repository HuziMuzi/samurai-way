import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    navbarReducer,
    usersReducer,
    authReducer
})



export type AppRootState = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store