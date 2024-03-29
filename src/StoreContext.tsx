import React from "react";
import {AppRootState} from "./bll/redux-store";


const StoreContext = React.createContext({} as AppRootState)

export type  ProviderType = {
    store: AppRootState
    children : any
}

export const Prov = (props:ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContext
