import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    navbarReducer,
})


export type AppRootState = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer)