import React from "react"
import s from './Header.module.css'
import {Navbar} from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {authThunk, setUserData, userAuth} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";


type headerContainerType = {
    // setUserData : (userId: number, email: string, login: string) => void
    isAuth : boolean
    login : string  | null
    authThunk : () => any
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


export default connect(mapStateToProps,{authThunk})(HeaderContainer)