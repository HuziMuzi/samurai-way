import React from "react"
import s from './Header.module.css'
import {Navbar} from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/redux-store";
import {setUserData} from "../../Redux/auth-reducer";


type headerContainerType = {}

 class HeaderContainer extends React.Component<headerContainerType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
                withCredentials: true
            })
            .then((response) => {
                console.log(response)
                // this.props.toggleIsFetching(false)

            })
    }

    render() {


        return (
            <Header />
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {

    }
}


export default connect(mapStateToProps,{setUserData})(HeaderContainer)