import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {authThunk, LogoutThunk} from "../../Redux/auth-reducer";


type headerContainerType = {
    isAuth : boolean
    login : string  | null
    LogoutThunk : () => void
}

 class HeaderContainer extends React.Component<headerContainerType> {

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logOut={this.props.LogoutThunk}
            />
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        isAuth : state.authReducer.isAuth,
        login: state.authReducer.login
    }
}


export default connect(mapStateToProps,{LogoutThunk})(HeaderContainer)