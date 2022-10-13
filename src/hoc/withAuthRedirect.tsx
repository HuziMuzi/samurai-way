import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppRootState} from "../Redux/redux-store";
import {connect} from "react-redux";


type mapStateToProps = {
    isAuth: boolean
}
let mapStateToProps = (state: AppRootState): mapStateToProps => {
    return {
        isAuth: state.authReducer.isAuth
    }
}


export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    function authRedirect(props: mapStateToProps) {
        let {isAuth, ...rest} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...rest as T}/>
    }

    return connect(mapStateToProps)(authRedirect)
}


export default WithAuthRedirect;