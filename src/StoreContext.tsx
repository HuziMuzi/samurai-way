import React from "react";
import {AppRootState} from "./Redux/redux-store";
//
//
const StoreContext = React.createContext({} as AppRootState)

export type  ProviderType = {
    store: AppRootState
    children : any
}

export const Provider = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>

    )
}



export default StoreContext