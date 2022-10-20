import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {authThunk, LogoutThunk} from "../../Redux/auth-reducer";


type headerContainerType = {
    isAuth : boolean
    login : string  | null
    authThunk : () => any
    LogoutThunk : () => void
}

 class HeaderContainer extends React.Component<headerContainerType> {

    componentDidMount() {
        this.props.authThunk()
        // authAPI.authMe().then((response) => {
        //         if(response.data.resultCode === 0) {
        //             let {id, login, email}= response.data.data
        //             if(id !== null && login !== null && email !== null) {
        //                 this.props.setUserData(id, email, login)
        //             }
        //         }
        //
        //     })
    }

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


export default connect(mapStateToProps,{authThunk,LogoutThunk})(HeaderContainer)